import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-layout',
  template: `
    <u-tabs>
      <u-tab uTitle="演示">
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
      </u-tab>
      <u-tab uTitle="Layout 布局">
        <markdown src="layout/layout.md"></markdown>
      </u-tab>
      <u-tab uTitle="API">
        <markdown src="layout/layout-api.md"></markdown>
      </u-tab>
    </u-tabs>
  `,
})
export class UdemoLayoutComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
