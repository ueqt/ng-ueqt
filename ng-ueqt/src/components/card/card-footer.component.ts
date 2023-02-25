import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-footer',
  exportAs: 'uCardFooter',
  standalone: true,
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardFooterComponent {
  @HostBinding('class.u-card-footer')
  get classCardFooter(): boolean {
    return true;
  }
}
