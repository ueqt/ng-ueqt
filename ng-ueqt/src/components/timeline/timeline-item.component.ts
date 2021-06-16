import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'u-timeline-item',
  exportAs: 'uTimelineItem',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-item.component.html'
})
export class UTimelineItemComponent {
  /**
   * 内容
   */
  @Input() uContent: string | TemplateRef<{ $implicit: any }> | null = null;

  /**
   * 内容参数
   */
  @Input() uContentArgs: any;
}
