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
import { takeUntil } from 'rxjs/operators';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { UTabLabelDirective } from './tab-label.directive';
import { UTabBodyComponent } from './tab-body.component';

@Component({
  selector: 'u-tabs',
  exportAs: 'uTabs',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    UTabsNavComponent,
    UTabLabelDirective,
    UTabBodyComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<ng-container *ngIf="listOfUTabComponent">
    <u-tabs-nav [selectedIndex]="uSelectedIndex">
        <div uTabLabel [class.u-tabs-tab-active]="uSelectedIndex === i" [disabled]="tab.uDisabled"
          (click)="clickLabel(i, tab.uDisabled)" *ngFor="let tab of listOfUTabComponent; let i = index">
            <ng-container [ngTemplateOutlet]="tab.uCustomTitle || defaultTitle"></ng-container>
            <ng-template #defaultTitle>
                {{ tab.uTitle }}
            </ng-template>
        </div>
    </u-tabs-nav>
    <div #tabContent class="u-tabs-content" [style.margin-left.%]="-(uSelectedIndex || 0) * 100">
        <u-tab-body class="u-tabs-tabpane" *ngFor="let tab of listOfUTabComponent; let i = index"
          [active]="uSelectedIndex === i" [content]="tab.template || tab.content"></u-tab-body>
    </div>
</ng-container>
  `
})
export class UTabsComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
  @ContentChildren(UTabComponent) listOfUTabComponent: QueryList<UTabComponent>;
  @ViewChild(UTabsNavComponent) uTabsNavComponent: UTabsNavComponent;
  @ViewChild('tabContent') tabContent: ElementRef;

  /**
   * 当前激活 tab 面板的 序列号，可双向绑定
   */
  @Input()
  set uSelectedIndex(value: number) {
    this.indexToSelect = value;
  }
  get uSelectedIndex(): number {
    return this.selectedIndex;
  }

  @HostBinding('class.u-tabs') classTabs = true;

  /**
   * 当前激活 tab 面板的 序列号变更回调函数
   */
  @Output() readonly uSelectedIndexChange: EventEmitter<
    number
  > = new EventEmitter<number>();

  /** Subscription to tabs being added/removed. */
  private tabsSubscription = Subscription.EMPTY;
  private destroy$ = new Subject<void>();

  private indexToSelect = 0;
  private selectedIndex = -1;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  clickLabel(index: number, disabled: boolean): void {
    if (!disabled) {
      this.emitClickEvent(index);
    }
  }

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
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.tabsSubscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
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

}
