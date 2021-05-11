import { UMenuNode } from 'ng-ueqt';
import { Component } from '@angular/core';

@Component({
  selector: 'udemo-menu-basic',
  template: `
  Inline<br />
  <u-menu [datas]="datas"></u-menu>
  <hr/>
  Horizontal<br />
  <u-menu [datas]="datas" mode="horizontal"></u-menu>
  <hr/>
  Vertical<br />
  <u-menu [datas]="datas" mode="vertical"></u-menu>
  <hr/>
  `,
})
export class UdemoMenuBasicComponent {
  datas: UMenuNode[] = [
    {
      name: 'aaa',
      children: [
        {
          name: 'aaa-1',
          children: [
            {
              name: 'aaa-1-1',
            },
          ],
        },
        {
          name: 'aaa-2',
          click: () => {
            console.log('aaa-2');
          }
        },
        {
          name: 'aaa-3',
          children: [
            {
              name: 'aaa-3-1',
            },
          ],
        },
      ],
    },
    {
      name: 'bbb',
      color: 'var(--u-primary)'
    },
  ];
}
