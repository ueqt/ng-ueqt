import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-image',
  exportAs: 'uCardImage',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardImageComponent {
  @HostBinding('class.u-card-image')
  get classCardImage(): boolean {
    return true;
  }
}
