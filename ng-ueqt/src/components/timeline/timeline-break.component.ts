import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
} from '@angular/core';
import { UStringTemplateOutletDirective } from '../core';

@Component({
  selector: 'u-timeline-break',
  exportAs: 'uTimelineBreak',
  standalone: true,
  imports: [
    UStringTemplateOutletDirective,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="u-timeline-item-break">
    <ng-container *uStringTemplateOutlet="uContent; context: {$implicit: uContentArgs}">{{ uContent }}
    </ng-container>
</div>
  `
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
