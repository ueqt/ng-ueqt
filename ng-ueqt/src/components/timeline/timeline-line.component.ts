import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-timeline-line',
  exportAs: 'uTimelineLine',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './timeline-line.component.html'
})
export class UTimelineLineComponent {
  @HostBinding('class.u-timeline-line') classTimelineLine = true;
}
