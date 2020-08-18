import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'udemo-grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
})
export class UdemoGridComponent {
  basic = require('!!raw-loader!./basic.ts').default;

  constructor() {
    console.log(this.basic);
  }
}
