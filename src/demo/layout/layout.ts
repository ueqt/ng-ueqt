import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class UdemoLayoutComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
