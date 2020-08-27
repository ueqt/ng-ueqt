import { UAny } from './../core/util/types';
import { Platform } from '@angular/cdk/platform';
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
  Optional,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { merge, of as observableOf, Subject, Subscription } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { UTabsInkBarDirective } from './tabs-ink-bar.directive';
import { UTabLabelDirective } from './tab-label.directive';
import { InputBoolean, pxToNumber } from '../core/util';
import { UResizeService } from '../core/services';

const EXAGGERATED_OVERSCROLL = 64;
export type ScrollDirection = 'after' | 'before';

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
        *ngIf="showPaginationControls"
        class="u-tabs-tab-prev"
        (click)="scrollHeader('before')"
        [class.u-tabs-tab-btn-disabled]="disableScrollBefore"
      >
        <i class="u-tabs-tab-prev-icon" uIcon="left"></i>
      </span>
      <span
        *ngIf="showPaginationControls"
        class="u-tabs-tab-next"
        (click)="scrollHeader('after')"
        [class.ant-tabs-tab-btn-disabled]="disableScrollAfter"
      >
        <i class="u-tabs-tab-next-icon" uIcon="right"></i>
      </span>
      <div class="u-tabs-nav-wrap">
        <div class="u-tabs-nav-scroll" #scrollListElement>
          <div
            class="u-tabs-nav"
            #navListElement
            (cdkObserveContent)="onContentChanges()"
          >
            <div>
              <ng-content></ng-content>
            </div>
            <div uTabsInkBar></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UTabsNavComponent
  implements AfterContentChecked, AfterContentInit, OnDestroy {
  showPaginationControls = false;
  disableScrollAfter = true;
  disableScrollBefore = true;

  @HostBinding('class.u-tabs-nav') classTabsNav = true;

  @ContentChildren(UTabLabelDirective) listOfUTabLabelDirective!: QueryList<
    UTabLabelDirective
  >;

  @ViewChild(UTabsInkBarDirective) uTabsInkBarDirective!: UTabsInkBarDirective;
  @ViewChild('navContainerElement') navContainerElement!: ElementRef<
    HTMLDivElement
  >;
  @ViewChild('navListElement') navListElement!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollListElement') scrollListElement!: ElementRef<
    HTMLDivElement
  >;

  private localScrollDistance = 0;
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  set scrollDistance(v: number) {
    this.localScrollDistance = Math.max(
      0,
      Math.min(this.getMaxScrollDistance(), v)
    );

    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this.scrollDistanceChanged = true;
    this.checkScrollingControls();
  }
  get scrollDistance(): number {
    return this.localScrollDistance;
  }

  private localSelectedIndex = 0;
  @Input()
  set selectedIndex(value: number) {
    this.selectedIndexChanged = this.localSelectedIndex !== value;
    this.localSelectedIndex = value;
  }
  get selectedIndex(): number {
    return this.localSelectedIndex;
  }

  /** Cached text content of the header. */
  private currentTextContent?: string;
  private destroy$ = new Subject<void>();

  selectedIndexChanged = false;
  realignInkBar: Subscription | null = null;
  tabLabelCount?: number;
  scrollDistanceChanged?: boolean;

  constructor(
    public elementRef: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
    private resizeService: UResizeService
  ) {}

  onContentChanges(): void {
    const textContent = this.elementRef.nativeElement.textContent;
    // We need to diff the text content of the header, because the MutationObserver callback
    // will fire even if the text content didn't change which is inefficient and is prone
    // to infinite loops if a poorly constructed expression is passed in (see #14249).
    if (textContent !== this.currentTextContent) {
      this.currentTextContent = textContent;
      this.ngZone.run(() => {
        this.updatePagination();
        this.alignInkBarToSelectedTab();
        this.cdr.markForCheck();
      });
    }
  }

  scrollHeader(scrollDir: ScrollDirection): void {
    // Move the scroll distance one-third the length of the tab list's viewport.
    this.scrollDistance +=
      ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
  }

  ngAfterContentChecked(): void {
    if (this.tabLabelCount !== this.listOfUTabLabelDirective.length) {
      this.updatePagination();
      this.tabLabelCount = this.listOfUTabLabelDirective.length;
      this.cdr.markForCheck();
    }
    if (this.selectedIndexChanged) {
      this.scrollToLabel(this.localSelectedIndex);
      this.checkScrollingControls();
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
      this.cdr.markForCheck();
    }
    if (this.scrollDistanceChanged) {
      this.updateTabScrollPosition();
      this.scrollDistanceChanged = false;
      this.cdr.markForCheck();
    }
  }

  ngAfterContentInit(): void {
    this.realignInkBar = this.ngZone.runOutsideAngular(() => {
      const resize =
        typeof window !== 'undefined'
          ? this.resizeService.subscribe().pipe(takeUntil(this.destroy$))
          : observableOf(null);
      return merge(resize)
        .pipe(startWith(null))
        .subscribe(() => {
          this.updatePagination();
          this.alignInkBarToSelectedTab();
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.realignInkBar) {
      this.realignInkBar.unsubscribe();
    }
  }

  updateTabScrollPosition(): void {
    if (!this.navListElement) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = -scrollDistance;
    this.renderer.setStyle(
      this.navListElement.nativeElement,
      'transform',
      `translate3d(${translateX}px, 0, 0)`
    );
  }

  updatePagination(): void {
    this.checkPaginationEnabled();
    this.checkScrollingControls();
    this.updateTabScrollPosition();
  }

  checkPaginationEnabled(): void {
    const isEnabled =
      this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
    if (!isEnabled) {
      this.scrollDistance = 0;
    }
    if (isEnabled !== this.showPaginationControls) {
      this.cdr.markForCheck();
    }
    this.showPaginationControls = isEnabled;
  }

  scrollToLabel(labelIndex: number): void {
    const selectedLabel = this.listOfUTabLabelDirective
      ? this.listOfUTabLabelDirective.toArray()[labelIndex]
      : null;

    if (selectedLabel) {
      // The view length is the visible width of the tab labels.

      let labelBeforePos: number;
      let labelAfterPos: number;
      labelBeforePos = selectedLabel.getOffsetLeft();
      labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();

      const beforeVisiblePos = this.scrollDistance;
      const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;

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
  }

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
    return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
  }

  get viewWidthHeightPix(): number {
    if (!this.navContainerElement) {
      return 0;
    }
    let PAGINATION_PIX = 0;
    if (this.showPaginationControls) {
      PAGINATION_PIX = this.navContainerScrollPaddingPix;
    }
    return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
  }

  get navContainerScrollPaddingPix(): number {
    if (!this.navContainerElement) {
      return 0;
    }
    if (this.platform.isBrowser) {
      const navContainer = this.navContainerElement.nativeElement;
      const originStyle: CSSStyleDeclaration = window.getComputedStyle
        ? window.getComputedStyle(navContainer)
        : (navContainer as UAny).currentStyle; // currentStyle for IE < 9
      return (
        pxToNumber(originStyle.paddingLeft) +
        pxToNumber(originStyle.paddingRight)
      );
    } else {
      return 0;
    }
  }

  get tabListScrollWidthHeightPix(): number {
    if (!this.navListElement) {
      return 0;
    }
    return this.navListElement.nativeElement.scrollWidth;
  }

  get tabListScrollOffSetWidthHeight(): number {
    if (!this.scrollListElement) {
      return 0;
    }
    return this.scrollListElement.nativeElement.offsetWidth;
  }

  alignInkBarToSelectedTab(): void {
    const selectedLabelWrapper =
      this.listOfUTabLabelDirective && this.listOfUTabLabelDirective.length
        ? this.listOfUTabLabelDirective.toArray()[this.selectedIndex].elementRef
            .nativeElement
        : null;
    if (this.uTabsInkBarDirective) {
      this.uTabsInkBarDirective.alignToElement(selectedLabelWrapper);
    }
  }
}
