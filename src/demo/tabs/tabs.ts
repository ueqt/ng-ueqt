import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-tabs',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-tabs-basic class="tabs-demo"></udemo-tabs-basic>
        </div>
        <div intro>
          <markdown src="tabs/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Tabs 标签页">
      <markdown src="tabs/tabs.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="tabs/tabs-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoTabsComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
