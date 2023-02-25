import { UdemoCode } from '../../app/demo';
import { UdemoTooltipBasicComponent } from './basic';
import { UdemoTooltipPlacementComponent } from './placement';

export const tooltipDemos: UdemoCode[] = [
  {
    title: '基本使用',
    type: 'basic',
    code: require('!!raw-loader!./basic.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoTooltipBasicComponent,
  },
  {
    title: '位置',
    type: 'placement',
    code: require('!!raw-loader!./placement.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoTooltipPlacementComponent,
  }
];
