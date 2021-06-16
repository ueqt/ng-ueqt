import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'u-timeline-break',
  exportAs: 'uTimelineBreak',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-break.component.html'
})
export class UTimelineBreakComponent {
  /**
   * 内容
   */
  @Input() uContent: string | TemplateRef<{ $implicit: any }> | null = null;

  /**
   * 内容参数
   */
  @Input() uContentArgs: any;
}
