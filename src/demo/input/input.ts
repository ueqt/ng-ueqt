import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-button',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-input-basic></udemo-input-basic>
        </div>
        <div intro>
          <markdown src="input/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Input 输入框">
      <markdown src="input/input.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="input/input-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoInputComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
