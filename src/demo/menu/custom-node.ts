import { UMenuNode } from '../../../ng-ueqt/src/components/menu/menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'udemo-menu-custom-node',
  template: `<u-menu [datas]="datas" [customNode]="custom"></u-menu>
    <ng-template #custom let-node="node"
      ><i uIcon="bars" style="margin-right: 10px;"></i>
      <span>{{ node.addition }} {{ node.name }}</span></ng-template
    > `,
})
export class UdemoMenuCustomNodeComponent {
  datas: UMenuNode[] = [
    {
      name: 'aaa',
      addition: '1',
      children: [
        {
          name: 'aaa-1',
          addition: '2',
          children: [
            {
              name: 'aaa-1-1',
              addition: '3',
            },
          ],
        },
      ],
    },
    {
      name: 'bbb',
      addition: '4',
    },
  ];
}
