import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-contributions',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-contributions-basic></udemo-contributions-basic>
        </div>
        <div intro>
          <markdown src="contributions/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Contributions 贡献图">
      <markdown src="contributions/contributions.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="contributions/contributions-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoContributionsComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
