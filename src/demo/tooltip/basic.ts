import { Component } from '@angular/core';

@Component({
  selector: 'udemo-tooltip-basic',
  template: `
  <div uTooltip="tips" style="background: blue;">hover me</div>

  <hr/>

  <div [uTooltip]="tips" style="background: green;">hover me</div>
  <ng-template #tips>
    <div style="color: red;font-size: 20px;">It's tooltip!</div>
  </ng-template>
`,
})
export class UdemoTooltipBasicComponent { }
