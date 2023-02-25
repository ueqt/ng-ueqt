import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-actions',
  exportAs: 'uCardActions',
  standalone: true,
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardActionsComponent {
  @HostBinding('class.u-card-actions')
  get classCardActions(): boolean {
    return true;
  }
}
