import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  HostBinding,
} from '@angular/core';
import { UStringTemplateOutletDirective } from '../core';

@Component({
  selector: 'u-timeline-item',
  exportAs: 'uTimelineItem',
  standalone: true,
  imports: [
    UStringTemplateOutletDirective,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="u-timeline-item-badge" [style.background-color]="uBadgeBackgroundColor">
    <ng-container *uStringTemplateOutlet="uBadge; context: {$implicit: uBadgeArgs}">{{ uBadge }}</ng-container>
</div>
<div class="u-timeline-item-body">
    <ng-container *uStringTemplateOutlet="uContent; context: {$implicit: uContentArgs}">{{ uContent }}</ng-container>
</div>
  `
})
export class UTimelineItemComponent {

  @HostBinding('class.u-timeline-item') classTimelineItem = true;

  /**
   * 内容
   */
  @Input() uContent: string | TemplateRef<{ $implicit: any }> | null = null;

  /**
   * 内容参数
   */
  @Input() uContentArgs: any;

  /**
   * 提示符
   */
  @Input() uBadge: string | TemplateRef<{ $implicit: any }> | null = null;

  /**
   * 提示符参数
   */
  @Input() uBadgeArgs: any;

  /**
   * 提示符背景色
   */
  @Input() uBadgeBackgroundColor: string;
}
