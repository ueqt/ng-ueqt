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
      name: '通用',
      children: [
        {
          name: 'Icon 图标',
          url: 'icon',
        },
      ],
    },
    {
      name: '布局',
      children: [
        {
          name: 'Grid 栅格',
          url: 'grid',
        },
        {
          name: 'Layout 布局',
          url: 'layout',
        },
      ],
    },
    {
      name: '导航',
      children: [
        {
          name: 'Menu 菜单',
          url: 'menu',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  menuClick(node: UMenuFlatNode): void {
    this.router.navigateByUrl('/' + node.url);
  }
}
