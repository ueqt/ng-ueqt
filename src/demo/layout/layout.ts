import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-layout',
  template: ` <markdown src="layout/layout.md"></markdown>
    <udemo-code-box
      uTitle="基本结构"
      [uCode]="basic"
      uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
    >
      <div demo>
        <udemo-layout-basic class="layout-demo"></udemo-layout-basic>
      </div>
      <div intro>
        <markdown src="layout/basic.md"></markdown>
      </div>
    </udemo-code-box>
    <markdown src="layout/layout-api.md"></markdown>`,
})
export class UdemoLayoutComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
