import { Component } from '@angular/core';
declare const require: any;

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
          <udemo-button-basic></udemo-button-basic>
        </div>
        <div intro>
          <markdown src="button/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Button 按钮">
      <markdown src="button/button.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="button/button-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoButtonComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
