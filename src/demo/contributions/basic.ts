import { Component } from '@angular/core';
import { UContributionsModel } from 'ng-ueqt';

@Component({
  selector: 'udemo-contributions-basic',
  template: '<u-contributions [uOptions]="options"></u-contributions>',
})
export class UdemoContributionsBasicComponent {

  options = new UContributionsModel();

  constructor() {
    this.options.year = 2020;
    this.options.datas = {
      '01-01': 5,
      '01-04': 6,
      '02-05': 44,
      '03-02': 89,
      '06-12': 421,
      '12-20': 999
    };
    this.options.pieces = [
      { min: 721, max: 999999, color: '#5d2116' }, // 十二小时以上
      { min: 481, max: 720, color: '#950231' }, // 十二小时战斗
      { min: 301, max: 480, color: '#be013f' }, // 八小时战斗
      { min: 181, max: 300, color: '#eb316d' }, // 五小时战斗
      { min: 61, max: 180, color: '#fb82a8' }, // 三小时战斗
      { min: 31, max: 60, color: '#febed1' }, // 一小时战斗
      { min: 0, max: 30, color: '#fee6ee' }, // 60战以下，相当于玩了半小时左右
    ];
  }
}
