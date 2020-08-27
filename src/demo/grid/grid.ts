import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-grid',
  template: `
    <u-tabs>
      <u-tab uTitle="Grid 栅格">
        <markdown src="grid/grid.md"></markdown>
      </u-tab>
      <u-tab uTitle="API">
        <markdown src="grid/grid-api.md"></markdown>
      </u-tab>
      <u-tab uTitle="基础栅格">
        <udemo-code-box
          uTitle="基础栅格(Basic Grid)"
          [uCode]="basic"
          uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
        >
          <div demo>
            <udemo-grid-basic class="grid-demo"></udemo-grid-basic>
          </div>
          <div intro>
            <markdown src="grid/basic.md"></markdown>
          </div>
        </udemo-code-box>
      </u-tab>
    </u-tabs>
  `,
  styles: [
    `
      .grid-demo ::ng-deep .u-row > div:not(.gutter-row):nth-child(odd) {
        background: rgba(0, 146, 255, 0.75);
        padding: 16px 0;
      }

      .grid-demo ::ng-deep .u-row > div:not(.gutter-row) {
        padding: 16px 0;
        background: #0092ff;
      }

      .grid-demo ::ng-deep .u-row > div {
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
        text-align: center;
        border-radius: 0;
      }
    `,
  ],
})
export class UdemoGridComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
