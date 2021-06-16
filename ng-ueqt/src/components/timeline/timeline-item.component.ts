import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-timeline-item',
  exportAs: 'uTimelineItem',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-item.component.html'
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
