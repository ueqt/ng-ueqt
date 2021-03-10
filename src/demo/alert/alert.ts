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
          <udemo-alert-basic></udemo-alert-basic>
        </div>
        <div intro>
          <markdown src="alert/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Alert 提示">
      <markdown src="alert/alert.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="alert/alert-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoAlertComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
