import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-tabs',
  template: `<markdown src="tabs/tabs.md"></markdown>
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
    <markdown src="tabs/tabs-api.md"></markdown>`,
})
export class UdemoTabsComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
