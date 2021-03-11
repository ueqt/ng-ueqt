import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-switch',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-switch-basic></udemo-switch-basic>
        </div>
        <div intro>
          <markdown src="switch/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Switch 开关">
      <markdown src="switch/switch.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="switch/switch-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoSwitchComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
