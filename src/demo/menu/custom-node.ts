import { allIcons, UIconDefinition, UIconDirective, UMenuComponent, UMenuNode } from 'ng-ueqt';
import { Component } from '@angular/core';
import { provideIconChild } from 'ng-ueqt/components/icon/icon.provider';

const icons: UIconDefinition[] = [
  allIcons.uiconBars
];

@Component({
  selector: 'udemo-menu-custom-node',
  standalone: true,
  imports: [
    UMenuComponent,
    UIconDirective,
  ],
  providers: [
    provideIconChild(icons)
  ],
  template: `
  Inline<br />
  <u-menu [uDatas]="datas" [uCustomNode]="custom"></u-menu>
  <hr />
  Horizontal<br />
  <u-menu [uDatas]="datas" [uCustomNode]="custom" uMode='horizontal'></u-menu>
  <hr />
  Vertical<br />
  <u-menu [uDatas]="datas" [uCustomNode]="custom" uMode='vertical'></u-menu>
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
