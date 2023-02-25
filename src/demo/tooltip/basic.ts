import { Component } from '@angular/core';
import { UTooltipDirective } from 'ng-ueqt';

@Component({
  selector: 'udemo-tooltip-basic',
  standalone: true,
  imports: [
    UTooltipDirective,
  ],
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
