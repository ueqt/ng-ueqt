import { NgClass } from '@angular/common';
import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'u-timeline',
  exportAs: 'uTimeline',
  standalone: true,
  imports: [
    NgClass,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="u-timeline" [ngClass]="'u-timeline-' + uOrientation">
    <ng-content></ng-content>
    <!-- 不需要做内容，只需要做头部，并且提供点击事件，点了自己在想要的地方控制显示内容 -->
</div>
  `
})
export class UTimelineComponent {
  /**
   * 方向
   */
  @Input() uOrientation: 'horizontal' | 'vertical' = 'horizontal';
}
