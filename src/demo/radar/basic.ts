import { Component } from '@angular/core';
import { URadarModel } from 'ng-ueqt/src/components/radar/radar.component';

@Component({
  selector: 'udemo-radar-basic',
  template: `<u-radar [options]="options"></u-radar>`,
})
export class UdemoRadarBasicComponent {

  options = new URadarModel();

  constructor() {
    this.options.captions = ['battery', 'design', 'useful', 'speed', 'weight'];
    this.options.datas = [
      [0.7, 1, 0.9, 0.67, 0.8],
      [0.6, 0.9, 0.8, 0.7, 0.6]
    ];
    this.options.colors = [
      '#cc333f',
      '#00a0b0'
    ];
  }
}
