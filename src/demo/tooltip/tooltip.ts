import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-tooltip',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-tooltip-basic></udemo-tooltip-basic>
        </div>
        <div intro>
          <markdown src="tooltip/basic.md"></markdown>
        </div>
      </udemo-code-box>
      <udemo-code-box
        uTitle="位置"
        [uCode]="placement"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-tooltip-placement></udemo-tooltip-placement>
        </div>
        <div intro>
          <markdown src="tooltip/placement.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Tooltip 文字提示">
      <markdown src="tooltip/tooltip.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="tooltip/tooltip-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoTooltipComponent {
  basic = require('!!raw-loader!./basic.ts').default;
  placement = require('!!raw-loader!./placement.ts').default;
}
