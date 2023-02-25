import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-title',
  exportAs: 'uCardTitle',
  standalone: true,
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardTitleComponent {
  @HostBinding('class.u-card-title')
  get classCardTitle(): boolean {
    return true;
  }
}
