import { UdemoCode } from '../../app/demo';
import { UdemoContributionsBasicComponent } from './basic';

export const contributionsDemos: UdemoCode[] = [
  {
    title: '基本使用',
    type: 'basic',
    code: require('!!raw-loader!./basic.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoContributionsBasicComponent,
  }
];
