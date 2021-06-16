import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-viewer',
  template: `
  <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-viewer-basic></udemo-viewer-basic>
        </div>
        <div intro>
          <markdown src="viewer/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Viewer 视图">
      <markdown src="viewer/viewer.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="viewer/viewer-api.md"></markdown>
    </u-tab>
  </u-tabs>
`,
})
export class UdemoViewerComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
