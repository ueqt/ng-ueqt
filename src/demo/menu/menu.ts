import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-menu',
  template: ` <u-tabs>
    <u-tab uTitle="Menu 菜单">
      <markdown src="menu/menu.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="menu/menu-api.md"></markdown>
    </u-tab>
    <u-tab uTitle="基本使用">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo style="width: 200px;">
          <udemo-menu-basic></udemo-menu-basic>
        </div>
        <div intro>
          <markdown src="menu/basic.md"></markdown>
        </div>
      </udemo-code-box>
      <udemo-code-box
        uTitle="自定义显示"
        [uCode]="customNode"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo style="width: 200px;">
          <udemo-menu-custom-node></udemo-menu-custom-node>
        </div>
        <div intro>
          <markdown src="menu/custom-node.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
  </u-tabs>`,
})
export class UdemoMenuComponent {
  basic = require('!!raw-loader!./basic.ts').default;
  customNode = require('!!raw-loader!./custom-node.ts').default;
}
