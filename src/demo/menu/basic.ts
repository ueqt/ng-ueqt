import { UMenuNode } from 'ng-ueqt';
import { Component } from '@angular/core';

@Component({
  selector: 'udemo-menu-basic',
  template: `<u-menu [datas]="datas"></u-menu>`,
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
      ],
    },
    {
      name: 'bbb',
    },
  ];
}
