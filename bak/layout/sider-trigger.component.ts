import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-sider-trigger',
  exportAs: 'uSiderTrigger',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template
        [ngTemplateOutlet]="uZeroTrigger || defaultZeroTrigger"
      ></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template
        [ngTemplateOutlet]="nzTrigger || defaultTrigger"
      ></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i
        u-icon
        [uType]="nzCollapsed ? 'right' : 'left'"
        *ngIf="!nzReverseArrow"
      ></i>
      <i
        u-icon
        [uType]="nzCollapsed ? 'left' : 'right'"
        *ngIf="nzReverseArrow"
      ></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i u-icon uType="bars"></i>
    </ng-template>
  `,
})
export class USiderTriggerComponent implements OnChanges, OnInit {
  @Input() uCollapsed = false;
  @Input() uReverseArrow = false;
  @Input() uZeroTrigger: TemplateRef<void> | null = null;
  @Input() uTrigger: TemplateRef<void> | undefined | null = undefined;
  @Input() matchBreakPoint = false;
  @Input() uCollapsedWidth: number | null = null;
  @Input() siderWidth: string | null = null;
  @Input() uBreakpoint: UBreakpointKey | null = null;

  isZeroTrigger = false;
  isNormalTrigger = false;

  @HostBinding('class.u-layout-sider-trigger') siderTrigger = this
    .isNormalTrigger;
  @HostBinding('style.width') width = this.isNormalTrigger
    ? this.siderWidth
    : null;
  @HostBinding('class.u-layout-sider-zero-with-trigger')
  siderZeroWithTrigger = this.isZeroTrigger;
  @HostBinding('class.u-layout-sider-zero-width-trigger-right')
  siderZeroWithTriggerRight = this.isZeroTrigger && this.uReverseArrow;
  @HostBinding('class.u-layout-sider-zero-width-trigger-left')
  siderZeroWidthTriggerLeft = this.isZeroTrigger && !this.uReverseArrow;

  updateTriggerType(): void {
    this.isZeroTrigger =
      this.uCollapsedWidth === 0 &&
      ((this.uBreakpoint && this.matchBreakPoint) || !this.uBreakpoint);
    this.isNormalTrigger = this.uCollapsedWidth !== 0;
  }
  ngOnInit(): void {
    this.updateTriggerType();
  }
  ngOnChanges(): void {
    this.updateTriggerType();
  }
}
