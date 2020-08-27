import { UMenuFlatNode } from './../../ng-ueqt/src/components/menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { UMenuNode } from 'ng-ueqt/src/components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'udemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  datas: UMenuNode[] = [
    {
      name: 'Grid 栅格',
      url: 'grid',
    },
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
      name: 'Tabs 标签页',
      url: 'tabs',
    },
  ];

  constructor(private router: Router) {}

  menuClick(node: UMenuFlatNode): void {
    this.router.navigateByUrl('/' + node.url);
  }
}
