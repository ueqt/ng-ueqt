import { Component } from '@angular/core';

@Component({
  selector: 'udemo-grid-flex-stretch',
  template: `
    <div>
      <p>Fill rest</p>
      <div uRow>
        <div uCol uFlex="100px">100px</div>
        <div uCol uFlex="auto">Fill Rest</div>
      </div>
    </div>
  `,
})
export class UdemoGridFlexStretchComponent {}
