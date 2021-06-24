import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-flex',
  template: `
  <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-flex-basic></udemo-flex-basic>
        </div>
        <div intro>
          <markdown src="flex/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Flex Flex布局">
      <markdown src="flex/flex.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="flex/flex-api.md"></markdown>
    </u-tab>
  </u-tabs>
`,
})
export class UdemoFlexComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
