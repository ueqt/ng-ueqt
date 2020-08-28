import { Component } from '@angular/core';
declare var require: any;

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
    <u-tab uTitle="long tab name 1"> </u-tab>
    <u-tab uTitle="long tab name 2"> </u-tab>
    <u-tab uTitle="long tab name 3"> </u-tab>
    <u-tab uTitle="long tab name 4"> </u-tab>
    <u-tab uTitle="long tab name 5"> </u-tab>
    <u-tab uTitle="long tab name 6"> </u-tab>
    <u-tab uTitle="long tab name 7"> </u-tab>
    <u-tab uTitle="long tab name 8"> </u-tab>
    <u-tab uTitle="long tab name 9"> </u-tab>
  </u-tabs>`,
})
export class UdemoTabsComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
