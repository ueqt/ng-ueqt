import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { USiderComponent } from './sider.component';

@Component({
  selector: 'u-layout',
  exportAs: 'uLayout',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class ULayoutComponent {
  @ContentChildren(USiderComponent) listOfNzSiderComponent!: QueryList<
    USiderComponent
  >;

  @HostBinding('class.u-layout-has-sider') get hasSider(): boolean {
    return (
      this.listOfNzSiderComponent && this.listOfNzSiderComponent.length > 0
    );
  }

  @HostBinding('class.u-layout') layout = true;
}
