import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-dynamic',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-dynamic-basic class="dynamic-demo"></udemo-dynamic-basic>
        </div>
        <div intro>
          <markdown src="dynamic/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Dynamic 动态">
      <markdown src="dynamic/dynamic.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="dynamic/dynamic-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoDynamicComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
