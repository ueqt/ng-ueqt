import { Component } from '@angular/core';

@Component({
  selector: 'udemo-grid-basic',
  template: `
    <div uRow>
      <div uCol="12">col-12</div>
      <div uCol="12">col-12</div>
    </div>
    <div uRow>
      <div uCol="8">col-8</div>
      <div uCol="8">col-8</div>
      <div uCol="8">col-8</div>
    </div>
    <div uRow>
      <div uCol="6">col-6</div>
      <div uCol="6">col-6</div>
      <div uCol="6">col-6</div>
      <div uCol="6">col-6</div>
    </div>
  `,
})
export class UdemoGridBasicComponent {}
