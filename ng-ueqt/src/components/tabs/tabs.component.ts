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
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  HostBinding,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';

import { merge, Subject, Subscription } from 'rxjs';
import { UTabComponent } from './tab.component';
import { UTabsNavComponent } from './tabs-nav.component';
import { UAny } from '../core/util';

export class UTabChangeEvent {
  index?: number;
  tab: UAny;
}

@Component({
  selector: 'u-tabs',
  exportAs: 'uTabs',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="listOfUTabComponent">
      <u-tabs-nav tabIndex="0" [selectedIndex]="uSelectedIndex">
        <div
          uTabLabel
          [class.u-tabs-tab-active]="uSelectedIndex == i"
          [disabled]="tab.uDisabled"
          (click)="clickLabel(i, tab.nzDisabled)"
          *ngFor="let tab of listOfUTabComponent; let i = index"
        >
          <ng-container
            [ngTemplateOutlet]="tab.uCustomTitle || defaultTitle"
          ></ng-container>
          <ng-template #defaultTitle>
            {{ tab.uTitle }}
          </ng-template>
        </div>
      </u-tabs-nav>
      <div
        #tabContent
        class="u-tabs-content"
        [style.margin-left.%]="-(uSelectedIndex || 0) * 100"
      >
        <u-tab-body
          class="u-tabs-tabpane"
          *ngFor="let tab of listOfUTabComponent; let i = index"
          [active]="uSelectedIndex == i"
          [content]="tab.template || tab.content"
        ></u-tab-body>
      </div>
    </ng-container>
  `,
})
export class UTabsComponent
  implements AfterContentChecked, AfterContentInit, OnDestroy {
  @ContentChildren(UTabComponent) listOfUTabComponent: QueryList<UTabComponent>;
  @ViewChild(UTabsNavComponent) uTabsNavComponent: UTabsNavComponent;
  @ViewChild('tabContent') tabContent: ElementRef;

  private indexToSelect = 0;
  private selectedIndex = -1;
  @Input()
  set uSelectedIndex(value: number) {
    this.indexToSelect = value;
  }
  get uSelectedIndex(): number {
    return this.selectedIndex;
  }

  @HostBinding('class.u-tabs') classTabs = true;

  /** Subscription to tabs being added/removed. */
  private tabsSubscription = Subscription.EMPTY;
  /** Subscription to changes in the tab labels. */
  private tabLabelSubscription = Subscription.EMPTY;
  private destroy$ = new Subject<void>();

  @Output() readonly uSelectChange: EventEmitter<
    UTabChangeEvent
  > = new EventEmitter<UTabChangeEvent>(true);
  @Output() readonly uSelectedIndexChange: EventEmitter<
    number
  > = new EventEmitter<number>();

  clickLabel(index: number, disabled: boolean): void {
    if (!disabled) {
      this.emitClickEvent(index);
    }
  }

  private emitClickEvent(index: number): void {
    const tabs = this.listOfUTabComponent.toArray();
    this.uSelectedIndex = index;
    tabs[index].uClick.emit();
    this.cdr.markForCheck();
  }

  private clampTabIndex(index: number): number {
    // 将输入的值限定在合理的范围内
    return Math.min(this.listOfUTabComponent.length - 1, Math.max(index, 0));
  }

  createChangeEvent(index: number): UTabChangeEvent {
    const event = new UTabChangeEvent();
    event.index = index;
    if (this.listOfUTabComponent && this.listOfUTabComponent.length) {
      event.tab = this.listOfUTabComponent.toArray()[index];
      this.listOfUTabComponent.forEach((item, i) => {
        if (i !== index) {
          item.uDeselect.emit();
        }
      });
      event.tab.uSelect.emit();
    }
    return event;
  }

  private subscribeToTabLabels(): void {
    if (this.tabLabelSubscription) {
      this.tabLabelSubscription.unsubscribe();
    }
    this.tabLabelSubscription = merge(
      ...this.listOfUTabComponent.map((tab) => tab.stateChanges)
    ).subscribe(() => this.cdr.markForCheck());
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(): void {
    if (this.listOfUTabComponent && this.listOfUTabComponent.length) {
      // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
      // the amount of tabs changes before the actual change detection runs.
      const indexToSelect = (this.indexToSelect = this.clampTabIndex(
        this.indexToSelect
      ));
      // If there is a change in selected index, emit a change event. Should not trigger if
      // the selected index has not yet been initialized.
      if (this.selectedIndex !== indexToSelect) {
        const isFirstRun = this.selectedIndex === -1;
        if (!isFirstRun) {
          this.uSelectChange.emit(this.createChangeEvent(indexToSelect));
        }

        // Changing these values after change detection has run
        // since the checked content may contain references to them.
        Promise.resolve().then(() => {
          this.listOfUTabComponent.forEach(
            (tab, index) => (tab.isActive = index === indexToSelect)
          );

          if (!isFirstRun) {
            this.uSelectedIndexChange.emit(indexToSelect);
          } else {
            this.clickLabel(0, false);
          }
        });
      }

      // Setup the position for each tab and optionally setup an origin on the next selected tab.
      this.listOfUTabComponent.forEach((tab: UTabComponent, index: number) => {
        tab.position = index - indexToSelect;

        // If there is already a selected tab, then set up an origin for the next selected tab
        // if it doesn't have one already.
        if (tab.position === 0 && !tab.origin) {
          tab.origin = indexToSelect - this.selectedIndex;
        }
      });

      if (this.selectedIndex !== indexToSelect) {
        this.selectedIndex = indexToSelect;
        this.cdr.markForCheck();
      }
    }
  }

  ngAfterContentInit(): void {
    this.subscribeToTabLabels();
    // Subscribe to changes in the amount of tabs, in order to be
    // able to re-render the content as new tabs are added or removed.
    this.tabsSubscription = this.listOfUTabComponent.changes.subscribe(() => {
      const indexToSelect = this.clampTabIndex(this.indexToSelect);

      // Maintain the previously-selected tab if a new tab is added or removed and there is no
      // explicit change that selects a different tab.
      if (indexToSelect === this.selectedIndex) {
        const tabs = this.listOfUTabComponent.toArray();

        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `_indexToSelect` and `selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `selectedIndexChange` event.
            this.indexToSelect = this.selectedIndex = i;
            break;
          }
        }
      }

      this.subscribeToTabLabels();
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.tabsSubscription.unsubscribe();
    this.tabLabelSubscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
