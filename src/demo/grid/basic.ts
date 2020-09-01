import { Component } from '@angular/core';

@Component({
  selector: 'udemo-grid-basic',
  template: `
    <div uRow>
      <div uCol="24">24</div>
      <div uCol="24">24</div>
    </div>
    <div uRow>
      <div uCol="12" uXs="24">12, xs-24</div>
      <div uCol="12" uXs="24">12, xs-24</div>
    </div>
    <div uRow>
      <div uCol="12" uFlex="12" uXs="24">12, xs-24</div>
      <div uCol uFlex="32px">32px</div>
      <div uCol="12" uFlex="12" uXs="24">12, xs-24</div>
    </div>
    <div uRow>
      <div uCol="6">6</div>
      <div uCol="6">6</div>
      <div uCol="6">6</div>
      <div uCol="6">6</div>
    </div>
  `,
})
export class UdemoGridBasicComponent {}
