import { UdemoCode } from '../../app/demo';
import { UdemoTabsBasicComponent } from './basic';

export const tabsDemos: UdemoCode[] = [
  {
    title: '基本使用',
    type: 'basic',
    code: require('!!raw-loader!./basic.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoTabsBasicComponent,
  }
];
