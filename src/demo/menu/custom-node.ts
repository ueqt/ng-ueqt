import { UMenuNode } from 'ng-ueqt';
import { Component } from '@angular/core';

@Component({
  selector: 'udemo-menu-custom-node',
  template: `
  Inline<br />
  <u-menu [datas]="datas" [customNode]="custom"></u-menu>
  <hr />
  Horizontal<br />
  <u-menu [datas]="datas" [customNode]="custom" mode='horizontal'></u-menu>
  <hr />
  Vertical<br />
  <u-menu [datas]="datas" [customNode]="custom" mode='vertical'></u-menu>
  <hr />
    <ng-template #custom let-node="node"
      ><i uIcon="bars" style="margin-right: 10px;line-height: 22px;"></i>
      <span style="margin-right: 30px;">{{ node.addition }} {{ node.name }}</span></ng-template
    > `,
})
export class UdemoMenuCustomNodeComponent {
  datas: UMenuNode[] = [
    {
      name: 'aaaaaaa',
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
