import { Component } from '@angular/core';

@Component({
  selector: 'udemo-button-basic',
  template: `
  <u-button (click)="test()">Primary</u-button>
  <u-button uColor="red" (click)="test()">红色</u-button>
  <u-button uColor="var(--accent)" (click)="test()">Accent</u-button>
  <u-button [uDisabled]="true" (click)="test()">禁用</u-button>
`,
})
export class UdemoButtonBasicComponent {

  test(): void {
    console.log('test');
  }

}
