import {
  Platform,
  normalizePassiveListenerOptions,
} from '@angular/cdk/platform';
import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  HostBinding,
  AfterViewInit,
} from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { merge, Subject, fromEvent, timer } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { UTabsInkBarDirective } from './tabs-ink-bar.directive';
import { UTabLabelDirective } from './tab-label.directive';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER, SPACE, hasModifierKey } from '@angular/cdk/keycodes';

/** Config used to bind passive event listeners */
const passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
}) as EventListenerOptions;

/**
 * The directions that scrolling can go in when the header's tabs exceed the header width. 'After'
 * will scroll the header towards the end of the tabs list and 'before' will scroll towards the
 * beginning of the list.
 */
export type ScrollDirection = 'after' | 'before';

/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;

/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;

/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;

/**
 * 超长时可左右滚动
 */
@Component({
  selector: 'u-tabs-nav',
  exportAs: 'uTabsNav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="u-tabs-nav-container"
      [class.u-tabs-nav-container-scrolling]="showPaginationControls"
      #navContainerElement
    >
      <span
        #tabPrev
        class="u-tabs-tab-prev"
        (click)="scrollHeader('before')"
        [class.u-tabs-tab-btn-disabled]="disableScrollBefore"
        [class.u-tabs-tab-arrow-show]="showPaginationControls"
      >
        <i class="u-tabs-tab-prev-icon" uIcon="left"></i>
      </span>

      <span
        #tabNext
        class="u-tabs-tab-next"
        (click)="scrollHeader('after')"
        [class.u-tabs-tab-btn-disabled]="disableScrollAfter"
        [class.u-tabs-tab-arrow-show]="showPaginationControls"
      >
        <i class="u-tabs-tab-next-icon" uIcon="right"></i>
      </span>

      <div class="u-tabs-nav-wrap">
        <div class="u-tabs-nav-scroll" #tabListContainer>
          <div
            class="u-tabs-nav"
            #tabList
            (cdkObserveContent)="onContentChanges()"
          >
            <ng-content></ng-content>
            <div uTabsInkBar></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UTabsNavComponent
  implements AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy {
  @HostBinding('class.u-tabs-nav') classTabsNav = true;

  @ContentChildren(UTabLabelDirective) items: QueryList<UTabLabelDirective>;
  @ViewChild(UTabsInkBarDirective, { static: true })
  inkBar: UTabsInkBarDirective;
  @ViewChild('tabListContainer', { static: true }) tabListContainer: ElementRef<
    HTMLDivElement
  >;
  @ViewChild('tabList', { static: true }) tabList: ElementRef<HTMLDivElement>;
  @ViewChild('tabPrev') previousPaginator: ElementRef<HTMLElement>;
  @ViewChild('tabNext') nextPaginator: ElementRef<HTMLElement>;

  // The distance in pixels that the tab labels should be translated to the left.
  private mScrollDistance = 0;

  // Whether the header should scroll to the selected index after the view has been checked.
  private selectedIndexChanged = false;

  // Emits when the component is destroyed.
  private destroy$ = new Subject<void>();

  // Whether the controls for pagination should be displayed
  showPaginationControls = false;

  // Whether the tab list can be scrolled more towards the end of the tab label list.
  disableScrollAfter = true;

  // Whether the tab list can be scrolled more towards the beginning of the tab label list.
  disableScrollBefore = true;

  // The number of tab labels that are displayed on the header.
  // When this changes, the header should re-evaluate the scroll position.
  private tabLabelCount: number;

  // Whether the scroll distance has changed and should be applied after the view is checked.
  private scrollDistanceChanged: boolean;

  // Used to manage focus between the tabs.
  private keyManager: FocusKeyManager<UTabLabelDirective>;

  // Cached text content of the header.
  private currentTextContent: string;

  // Stream that will stop the automated scrolling.
  private stopScrolling = new Subject<void>();

  // The index of the active tab.
  get selectedIndex(): number {
    return this.mSelectedIndex;
  }
  @Input()
  set selectedIndex(value: number) {
    value = coerceNumberProperty(value);

    if (this.mSelectedIndex !== value) {
      this.selectedIndexChanged = true;
      this.mSelectedIndex = value;

      if (this.keyManager) {
        this.keyManager.updateActiveItem(value);
      }
    }
  }
  private mSelectedIndex = 0;

  // Event emitted when the option is selected.
  readonly selectFocusedIndex: EventEmitter<number> = new EventEmitter<
    number
  >();

  // Event emitted when a label is focused.
  readonly indexFocused: EventEmitter<number> = new EventEmitter<number>();

  // @ViewChild('navContainerElement') navContainerElement!: ElementRef<
  //   HTMLDivElement
  // >;
  // realignInkBar: Subscription | null = null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private viewportRuler: ViewportRuler,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private platform: Platform // private resizeService: UResizeService
  ) {
    // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
    ngZone.runOutsideAngular(() => {
      fromEvent(elementRef.nativeElement, 'mouseleave')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.stopInterval();
        });
    });
  }

  ngAfterViewInit(): void {
    // We need to handle these events manually, because we want to bind passive event listeners.
    fromEvent(
      this.previousPaginator.nativeElement,
      'touchstart',
      passiveEventListenerOptions
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.handlePaginatorPress('before');
      });

    fromEvent(
      this.nextPaginator.nativeElement,
      'touchstart',
      passiveEventListenerOptions
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.handlePaginatorPress('after');
      });
  }

  ngAfterContentInit(): void {
    // We need this to run before the `changes` subscription in parent to ensure that the
    // selectedIndex is up-to-date by the time the super class starts looking for it.
    this.items.changes
      .pipe(startWith(null), takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateActiveLink();
      });

    const resize = this.viewportRuler.change(150);
    const realign = () => {
      this.updatePagination();
      this.alignInkBarToSelectedTab();
    };

    this.keyManager = new FocusKeyManager<UTabLabelDirective>(this.items)
      .withHorizontalOrientation('ltr')
      .withHomeAndEnd()
      .withWrap();

    this.keyManager.updateActiveItem(0);

    realign();

    // On dir change or window resize, realign the ink bar and update the orientation of
    // the key manager if the direction has changed.
    merge(resize, this.items.changes)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        // We need to defer this to give the browser some time to recalculate the element dimensions.
        Promise.resolve().then(realign);
        this.keyManager.withHorizontalOrientation('ltr');
      });

    // If there is a change in the focus key manager we need to emit the `indexFocused`
    // event in order to provide a public event that notifies about focus changes. Also we realign
    // the tabs container by scrolling the new focused tab into the visible section.
    this.keyManager.change
      .pipe(takeUntil(this.destroy$))
      .subscribe((newFocusIndex) => {
        this.indexFocused.emit(newFocusIndex);
        this.setTabFocus(newFocusIndex);
      });
  }

  ngAfterContentChecked(): void {
    // If the number of tab labels have changed, check if scrolling should be enabled
    if (this.tabLabelCount !== this.items.length) {
      this.updatePagination();
      this.tabLabelCount = this.items.length;
      this.cdr.markForCheck();
    }

    // If the selected index has changed, scroll to the label and check if the scrolling controls
    // should be disabled.
    if (this.selectedIndexChanged) {
      this.scrollToLabel(this.selectedIndex);
      this.checkScrollingControls();
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
      this.cdr.markForCheck();
    }

    // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
    // then translate the header to reflect this.
    if (this.scrollDistanceChanged) {
      this.updateTabScrollPosition();
      this.scrollDistanceChanged = false;
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopScrolling.complete();
  }

  // Called when the user has selected an item via the keyboard.
  itemSelected(event: KeyboardEvent): void {}

  /** Handles keyboard events on the header. */
  handleKeydown(event: KeyboardEvent): void {
    // We don't handle any key bindings with a modifier key.
    if (hasModifierKey(event)) {
      return;
    }

    // tslint:disable-next-line: deprecation
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          this.selectFocusedIndex.emit(this.focusIndex);
          this.itemSelected(event);
        }
        break;
      default:
        this.keyManager.onKeydown(event);
    }
  }

  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */
  onContentChanges(): void {
    const textContent = this.elementRef.nativeElement.textContent;

    // We need to diff the text content of the header, because the MutationObserver callback
    // will fire even if the text content didn't change which is inefficient and is prone
    // to infinite loops if a poorly constructed expression is passed in (see #14249).
    if (textContent !== this.currentTextContent) {
      this.currentTextContent = textContent || '';

      // The content observer runs outside the `NgZone` by default, which
      // means that we need to bring the callback back in ourselves.
      this.ngZone.run(() => {
        this.updatePagination();
        this.alignInkBarToSelectedTab();
        this.cdr.markForCheck();
      });
    }
  }

  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination(): void {
    this.checkPaginationEnabled();
    this.checkScrollingControls();
    this.updateTabScrollPosition();
  }

  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex(): number {
    return this.keyManager ? this.keyManager.activeItemIndex : 0;
  }

  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value: number) {
    if (
      !this.isValidIndex(value) ||
      this.focusIndex === value ||
      !this.keyManager
    ) {
      return;
    }

    this.keyManager.setActiveItem(value);
  }

  /**
   * Notifies the component that the active link has been changed.
   */
  updateActiveLink(element?: ElementRef): void {
    // if (!this.items) {
    //   return;
    // }
    // const items = this.items.toArray();
    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].active) {
    //     this.selectedIndex = i;
    //     this.cdr.markForCheck();
    //     return;
    //   }
    // }
    // // The ink bar should hide itself if no items are active.
    // this.selectedIndex = -1;
    // this.inkBar.hide();
  }

  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */
  isValidIndex(index: number): boolean {
    if (!this.items) {
      return true;
    }

    const tab = this.items ? this.items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }

  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */
  setTabFocus(tabIndex: number): void {
    if (this.showPaginationControls) {
      this.scrollToLabel(tabIndex);
    }

    if (this.items && this.items.length) {
      this.items.toArray()[tabIndex].focus();

      // Do not let the browser manage scrolling to focus the element, this will be handled
      // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
      // should be the full width minus the offset width.
      const containerEl = this.tabListContainer.nativeElement;
      containerEl.scrollLeft = 0;
    }
  }

  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
  updateTabScrollPosition(): void {
    const scrollDistance = this.scrollDistance;
    const platform = this.platform;
    const translateX = -scrollDistance;

    // Don't use `translate3d` here because we don't want to create a new layer. A new layer
    // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
    // and ripples will exceed the boundaries of the visible tab bar.
    // See: https://github.com/angular/components/issues/10276
    // We round the `transform` here, because transforms with sub-pixel precision cause some
    // browsers to blur the content of the element.
    this.tabList.nativeElement.style.transform = `translateX(${Math.round(
      translateX
    )}px)`;

    // Setting the `transform` on IE will change the scroll offset of the parent, causing the
    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
    // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
    // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
    if (platform && (platform.TRIDENT || platform.EDGE)) {
      this.tabListContainer.nativeElement.scrollLeft = 0;
    }
  }

  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance(): number {
    return this.mScrollDistance;
  }
  set scrollDistance(value: number) {
    this.scrollTo(value);
  }

  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  scrollHeader(
    direction: ScrollDirection
  ): {
    maxScrollDistance: number;
    distance: number;
  } {
    const viewLength = this.tabListContainer.nativeElement.offsetWidth;

    // Move the scroll distance one-third the length of the tab list's viewport.
    const scrollAmount = ((direction === 'before' ? -1 : 1) * viewLength) / 3;

    return this.scrollTo(this.scrollDistance + scrollAmount);
  }

  /** Handles click events on the pagination arrows. */
  handlePaginatorClick(direction: ScrollDirection): void {
    this.stopInterval();
    this.scrollHeader(direction);
  }

  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  scrollToLabel(labelIndex: number): void {
    const selectedLabel = this.items ? this.items.toArray()[labelIndex] : null;

    if (!selectedLabel) {
      return;
    }

    // The view length is the visible width of the tab labels.
    const viewLength = this.tabListContainer.nativeElement.offsetWidth;
    const { offsetLeft, offsetWidth } = selectedLabel.elementRef.nativeElement;

    const labelBeforePos = offsetLeft;
    const labelAfterPos = labelBeforePos + offsetWidth;

    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;

    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -=
        beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance +=
        labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
    }
  }

  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  checkPaginationEnabled(): void {
    const isEnabled =
      this.tabList.nativeElement.scrollWidth >
      this.tabListContainer.nativeElement.offsetWidth;

    if (!isEnabled) {
      this.scrollDistance = 0;
    }

    if (isEnabled !== this.showPaginationControls) {
      this.cdr.markForCheck();
    }

    this.showPaginationControls = isEnabled;
  }

  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  checkScrollingControls(): void {
    // Check if the pagination arrows should be activated.
    this.disableScrollBefore = this.scrollDistance === 0;
    this.disableScrollAfter =
      this.scrollDistance === this.getMaxScrollDistance();
    this.cdr.markForCheck();
  }

  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */
  getMaxScrollDistance(): number {
    const lengthOfTabList = this.tabList.nativeElement.scrollWidth;
    const viewLength = this.tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }

  /** Tells the ink-bar to align itself to the current label wrapper */
  alignInkBarToSelectedTab(): void {
    const selectedItem =
      this.items && this.items.length
        ? this.items.toArray()[this.selectedIndex]
        : null;
    const selectedLabelWrapper = selectedItem
      ? selectedItem.elementRef.nativeElement
      : null;

    if (selectedLabelWrapper) {
      this.inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this.inkBar.hide();
    }
  }

  /** Stops the currently-running paginator interval.  */
  stopInterval(): void {
    this.stopScrolling.next();
  }

  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */
  handlePaginatorPress(
    direction: ScrollDirection,
    mouseEvent?: MouseEvent
  ): void {
    // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
    // null check the `button`, but we do it so we don't break tests that use fake events.
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }

    // Avoid overlapping timers.
    this.stopInterval();

    // Start a timer after the delay and keep firing based on the interval.
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
      // Keep the timer going until something tells it to stop or the component is destroyed.
      .pipe(takeUntil(merge(this.stopScrolling, this.destroy$)))
      .subscribe(() => {
        const { maxScrollDistance, distance } = this.scrollHeader(direction);

        // Stop the timer if we've reached the start or the end.
        if (distance === 0 || distance >= maxScrollDistance) {
          this.stopInterval();
        }
      });
  }

  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */
  private scrollTo(
    position: number
  ): {
    maxScrollDistance: number;
    distance: number;
  } {
    const maxScrollDistance = this.getMaxScrollDistance();
    this.mScrollDistance = Math.max(0, Math.min(maxScrollDistance, position));

    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this.scrollDistanceChanged = true;
    this.checkScrollingControls();

    return { maxScrollDistance, distance: this.mScrollDistance };
  }
}
