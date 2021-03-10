import { Component } from '@angular/core';

@Component({
  selector: 'udemo-input-basic',
  template: `
  <u-input uLabel="测试" uMaxLength="5"></u-input>
  <u-input uType="textarea" uLabel="多行"></u-input>
`,
})
export class UdemoInputBasicComponent {


}
