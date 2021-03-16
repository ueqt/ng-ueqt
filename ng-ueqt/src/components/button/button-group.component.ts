import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, HostListener, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'u-button-group',
  exportAs: 'uButtonGroup',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content></ng-content>
  `
})
export class UButtonGroupComponent {

  @HostBinding('class.u-button-group') classButton = true;
}
