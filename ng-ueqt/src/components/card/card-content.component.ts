import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-content',
  exportAs: 'uCardContent',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardContentComponent {
  @HostBinding('class.u-card-content')
  get classCardContent(): boolean {
    return true;
  }
}
