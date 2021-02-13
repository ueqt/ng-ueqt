import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'u-card-header',
  exportAs: 'uCardHeader',
  template: `<ng-content select="[u-card-avatar], [uCardAvatar]"></ng-content>
  <div class="u-card-header-text">
    <ng-content
        select="u-card-title, u-card-subtitle,
        [u-card-title], [u-card-subtitle],
        [uCardTitle], [uCardSubtitle]"></ng-content>
  </div>
  <ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UCardHeaderComponent {
  @HostBinding('class.u-card-header')
  get classCardHeader(): boolean {
    return true;
  }
}
