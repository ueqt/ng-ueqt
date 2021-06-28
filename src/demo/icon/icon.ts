import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-icon',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-icon-basic></udemo-icon-basic>
        </div>
        <div intro>
          <markdown src="icon/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Icon 图标">
      <markdown src="icon/icon.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="icon/icon-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoIconComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
