import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'u-layout',
  exportAs: 'uLayout',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content></ng-content> `,
})
export class ULayoutComponent {
  @ContentChildren(NzSiderComponent) listOfNzSiderComponent!: QueryList<
    NzSiderComponent
  >;

  @HostBinding('class.u-layout-has-sider') hasSider =
    this.listOfNzSiderComponent.length > 0;

  @HostBinding('class.u-layout') layout = true;
}
