import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-card',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-card-basic class="card-demo"></udemo-card-basic>
        </div>
        <div intro>
          <markdown src="card/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Card 卡片">
      <markdown src="card/card.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="card/card-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoCardComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
