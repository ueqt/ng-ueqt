import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-icon',
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss'],
})
export class UdemoIconComponent {
  basic = require('!!raw-loader!./basic.ts').default;
}
