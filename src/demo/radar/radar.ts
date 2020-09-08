import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-radar',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-radar-basic></udemo-radar-basic>
        </div>
        <div intro>
          <markdown src="icon/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="radar 雷达图">
      <markdown src="radar/radar.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="radar/radar-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoRadarComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
