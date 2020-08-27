import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-icon',
  template: ` <markdown src="icon/icon.md"></markdown>
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
    <markdown src="icon/icon-api.md"></markdown>`,
})
export class UdemoIconComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
