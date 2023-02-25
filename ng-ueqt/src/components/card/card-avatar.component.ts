import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-avatar',
  exportAs: 'uCardAvatar',
  standalone: true,
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardAvatarComponent {
  @HostBinding('class.u-card-avatar')
  get classCardAvatar(): boolean {
    return true;
  }
}
