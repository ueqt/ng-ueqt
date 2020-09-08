import { Component } from '@angular/core';

@Component({
  selector: 'udemo-radar-basic',
  template: `<u-radar [captions]="captions" [datas]="datas" [size]="450"></u-radar>`,
})
export class UdemoRadarBasicComponent {

  captions = ['battery', 'design', 'useful', 'speed', 'weight'];

  datas: any[] = [
    [0.7, 1, 0.9, 0.67, 0.8],
    [0.6, 0.9, 0.8, 0.7, 0.6]
  ];

}
