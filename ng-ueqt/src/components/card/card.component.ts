import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card',
  exportAs: 'uCard',
  template: `<ng-content></ng-content>
  <ng-content select="u-card-footer"></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardComponent {
  @HostBinding('class.u-card')
  get classCard(): boolean {
    return true;
  }
}
