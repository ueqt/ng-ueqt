import { Component } from '@angular/core';

@Component({
  selector: 'udemo-tooltip-placement',
  standalone: true,
  template: `
    <div style="margin-left:60px;">
      <button uTooltip="prompt text" uTooltipPlacement="topLeft">TL</button>
      <button uTooltip="prompt text" uTooltipPlacement="top">Top</button>
      <button uTooltip="prompt text" uTooltipPlacement="topRight">TR</button>
    </div>
    <div style="float:left;width: 60px;">
      <button uTooltip="prompt text" uTooltipPlacement="leftTop">LT</button>
      <button uTooltip="prompt text" uTooltipPlacement="left">Left</button>
      <button uTooltip="prompt text" uTooltipPlacement="leftBottom">LB</button>
    </div>
    <div style="margin-left:270px;width: 60px;">
      <button uTooltip="prompt text" uTooltipPlacement="rightTop">RT</button>
      <button uTooltip="prompt text" uTooltipPlacement="right">Right</button>
      <button uTooltip="prompt text" uTooltipPlacement="rightBottom">RB</button>
    </div>
    <div style="margin-left:60px;clear: both;">
      <button uTooltip="prompt text" uTooltipPlacement="bottomLeft">BL</button>
      <button uTooltip="prompt text" uTooltipPlacement="bottom">Bottom</button>
      <button uTooltip="prompt text" uTooltipPlacement="bottomRight">BR</button>
    </div>
  `,
  styles: [
    `
      button {
        width: 70px;
        text-align: center;
        padding: 0;
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `
  ]
})
export class UdemoTooltipPlacementComponent { }
