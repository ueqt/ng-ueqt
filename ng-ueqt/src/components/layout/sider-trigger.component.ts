import { UBreakpointKey } from './../core/services/breakpoint';
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
import { NgIf } from '@angular/common';
import { UIconDirective } from '../icon';

@Component({
  selector: 'u-sider-trigger',
  exportAs: 'uSiderTrigger',
  standalone: true,
  imports: [
    NgIf,
    UIconDirective,
  ],
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
        [ngTemplateOutlet]="uTrigger || defaultTrigger"
      ></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i [uIcon]="uCollapsed ? 'right' : 'left'"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i uIcon="bars"></i>
    </ng-template>
  `,
})
export class USiderTriggerComponent implements OnChanges, OnInit {
  /**
   * 当前收起状态
   */
  @Input() uCollapsed = false;
  /**
   * 自定义 uCollapsedWidth 为 0 时的 特殊trigger
   */
  @Input() uZeroTrigger: TemplateRef<void> | null = null;
  /**
   * 自定义 trigger，设置为 null 时隐藏 trigger
   */
  @Input() uTrigger: TemplateRef<void> | undefined | null = undefined;
  @Input() matchBreakPoint = false;
  /**
   * 收缩宽度，设置为 0 会出现特殊 trigger
   */
  @Input() uCollapsedWidth: number | null = null;
  @Input() siderWidth: string | null = null;
  @Input() uBreakpoint: UBreakpointKey | null = null;

  isZeroTrigger = false;
  isNormalTrigger = false;

  @HostBinding('class.u-layout-sider-trigger') get siderTrigger(): boolean {
    return this.isNormalTrigger;
  }
  @HostBinding('style.width') get width(): string {
    return this.isNormalTrigger ? this.siderWidth : null;
  }
  @HostBinding('class.u-layout-sider-zero-with-trigger')
  get siderZeroWithTrigger(): boolean {
    return this.isZeroTrigger;
  }

  ngOnInit(): void {
    this.updateTriggerType();
  }

  ngOnChanges(): void {
    this.updateTriggerType();
  }

  private updateTriggerType(): void {
    this.isZeroTrigger =
      this.uCollapsedWidth === 0 &&
      ((this.uBreakpoint && this.matchBreakPoint) || !this.uBreakpoint);
    this.isNormalTrigger = this.uCollapsedWidth !== 0;
  }
}
