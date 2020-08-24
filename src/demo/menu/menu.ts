import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
})
export class UdemoMenuComponent {
  basic = require('!!raw-loader!./basic.ts').default;
  customNode = require('!!raw-loader!./custom-node.ts').default;
}
