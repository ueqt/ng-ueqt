import { Component } from '@angular/core';
import { sleep } from 'ng-ueqt/components/core/util';

@Component({
  selector: 'udemo-button-basic',
  template: `
  <u-button [uClick]="test">Primary</u-button>
  <u-button uColor="red" [uClick]="test">红色</u-button>
  <u-button uColor="var(--u-accent)" [uClick]="test">Accent</u-button>
  <u-button [uDisabled]="true" [uClick]="test">禁用</u-button>
`,
})
export class UdemoButtonBasicComponent {

  test = async () => {
    console.log(this);
    await sleep(5000);
    console.log('test');
  }

}
