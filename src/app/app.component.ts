import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UContentComponent, UHeaderComponent, ULayoutComponent, UMenuNode, USiderComponent } from 'ng-ueqt';
import { UMenuComponent } from './../../ng-ueqt/src/components/menu/menu.component';
import { UThemeService } from './../../ng-ueqt/src/components/theme/theme.service';
import { menus } from '../demo';

@Component({
  selector: 'udemo-root',
  standalone: true,
  imports: [
    ULayoutComponent,
    UHeaderComponent,
    USiderComponent,
    UMenuComponent,
    UContentComponent,
    RouterOutlet,
  ],
  template: `
<u-layout>
    <u-header class="app-header">NG-UEQT
        <a style="float: right;" href="https://github.com/ueqt/ng-ueqt" target="_blank">
          <img src="https://img.shields.io/npm/v/ng-ueqt.svg" />
        </a>
    </u-header>
    <u-layout>
        <u-sider class="app-sider" [uCollapsible]="true" uBreakpoint="lg" [uCollapsedWidth]="0">
            <div class="app-menu">
                <u-menu [uDatas]="datas" (uNodeClick)="menuClick($event)"></u-menu>
            </div>
        </u-sider>
        <u-content>
            <div class="app-content">
                <router-outlet></router-outlet>
            </div>
        </u-content>
    </u-layout>
</u-layout>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(UMenuComponent) menu: UMenuComponent;

  datas = menus;

  constructor(
    private router: Router,
    private theme: UThemeService) {
    this.theme.change('default');
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.menu) {
          this.menu.selectNode(
            this.menu.flatNodes.find(
              (n) => '/' + n.url === event.urlAfterRedirects
            )
          );
        }
      }
    });
  }

  menuClick(node: UMenuNode): void {
    this.router.navigateByUrl('/' + node.url);
  }
}
