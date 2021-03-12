import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-modal',
  template: ` <u-tabs>
    <u-tab uTitle="演示">
      <udemo-code-box
        uTitle="基本使用"
        [uCode]="basic"
        uOnlineUrl="s/ng-ueqt-grid-basic-299jd"
      >
        <div demo>
          <udemo-modal-basic></udemo-modal-basic>
        </div>
        <div intro>
          <markdown src="modal/basic.md"></markdown>
        </div>
      </udemo-code-box>
    </u-tab>
    <u-tab uTitle="Modal 模态框">
      <markdown src="modal/modal.md"></markdown>
    </u-tab>
    <u-tab uTitle="API">
      <markdown src="modal/modal-api.md"></markdown>
    </u-tab>
  </u-tabs>`,
})
export class UdemoModalComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
