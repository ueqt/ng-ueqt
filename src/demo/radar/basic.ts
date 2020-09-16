import { Component } from '@angular/core';
import { URadarModel } from 'ng-ueqt/public-api';

@Component({
  selector: 'udemo-radar-basic',
  template: `<u-radar [options]="options"></u-radar>`,
})
export class UdemoRadarBasicComponent {

  options = new URadarModel();

  constructor() {
    this.options.captions = ['HP', 'MP', '攻击', '防御', '智力', '精神', '速度'];
    this.options.datas = [
      [1200, 690, 320, 310, 374, 255, 330],
      [1999, 200, 232, 231, 174, 363, 281]
    ];
    this.options.max = [1999, 1999, 375, 375, 375, 375, 375];
    this.options.colors = [
      '#cc333f',
      '#00a0b0'
    ];
  }
}
