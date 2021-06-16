import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-timeline',
  template: `
  <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-timeline-basic></udemo-timeline-basic>
        </div>
        <div intro>
          <markdown src="timeline/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Timeline 时间线">
      <markdown src="timeline/timeline.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="timeline/timeline-api.md"></markdown>
    </u-tab>
  </u-tabs>
`,
})
export class UdemoTimelineComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
