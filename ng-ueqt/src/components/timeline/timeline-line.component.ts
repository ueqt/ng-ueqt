import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-timeline-line',
  exportAs: 'uTimelineLine',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})
export class UTimelineLineComponent {
  @HostBinding('class.u-timeline-line') classTimelineLine = true;
}
