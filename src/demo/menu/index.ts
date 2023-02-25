import { UdemoCode } from '../../app/demo';
import { UdemoMenuBasicComponent } from './basic';
import { UdemoMenuCustomNodeComponent } from './custom-node';

export const menuDemos: UdemoCode[] = [
  {
    title: '基本使用',
    type: 'basic',
    code: require('!!raw-loader!./basic.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoMenuBasicComponent,
  },
  {
    title: '自定义显示',
    type: 'custom-node',
    code: require('!!raw-loader!./custom-node.ts').default,
    onlineUrl: 's/ng-ueqt-grid-basic-299jd',
    component: UdemoMenuCustomNodeComponent,
  }
];
