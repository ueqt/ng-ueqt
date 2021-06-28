import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'udemo-theme',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-theme-basic class="theme-demo"></udemo-theme-basic>
        </div>
        <div intro>
          <markdown src="theme/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Theme 皮肤">
      <markdown src="theme/theme.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="theme/theme-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoThemeComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
