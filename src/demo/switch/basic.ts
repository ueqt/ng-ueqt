import { Component } from '@angular/core';

@Component({
  selector: 'udemo-switch-basic',
  template: `
  <u-switch [(ngModel)]="result"></u-switch>
  <u-switch [(ngModel)]="result" uCheckedChildren="开" uUnCheckedChildren="关"></u-switch>
  <u-switch [(ngModel)]="result" [uCheckedChildren]="checkedTemplate" [uUnCheckedChildren]="unCheckedTemplate"></u-switch>
  <ng-template #checkedTemplate><span style="background-color: blue;width: 100%;">♂</span></ng-template>
  <ng-template #unCheckedTemplate><span style="background-color: pink;width: 100%;">♀</span></ng-template>
`,
})
export class UdemoSwitchBasicComponent {
  result = false;
}
