import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'u-timeline',
  exportAs: 'uTimeline',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline.component.html'
})
export class UTimelineComponent {
  /**
   * 方向
   */
  @Input() uOrientation: 'horizontal' | 'vertical' = 'horizontal';
}
