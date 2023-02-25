import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-subtitle',
  exportAs: 'uCardSubtitle',
  standalone: true,
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardSubtitleComponent {
  @HostBinding('class.u-card-subtitle')
  get classCardSubtitle(): boolean {
    return true;
  }
}
