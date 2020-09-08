import {
  UMenuFlatNode,
  UMenuComponent,
} from './../../ng-ueqt/src/components/menu/menu.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UMenuNode } from 'ng-ueqt/src/components/menu/menu.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'udemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(UMenuComponent) menu: UMenuComponent;

  datas: UMenuNode[] = [
    {
      name: 'Icon 图标',
      url: 'icon',
    },
    {
      name: 'Layout 布局',
      url: 'layout',
    },
    {
      name: 'Menu 菜单',
      url: 'menu',
    },
    {
      name: 'Radar 雷达图',
      url: 'radar',
    },
    {
      name: 'Tabs 标签页',
      url: 'tabs',
    },
    {
      name: 'Tooltip 文本提示',
      url: 'tooltip',
    },
  ];

  constructor(private router: Router) {
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

  menuClick(node: UMenuFlatNode): void {
    this.router.navigateByUrl('/' + node.url);
  }
}
