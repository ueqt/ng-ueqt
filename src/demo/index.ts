import { UMenuNode } from 'ng-ueqt';
import { buttonDemos } from './button';
import { cardDemos } from './card';
import { contributionsDemos } from './contributions';
import { dynamicDemos } from './dynamic';
import { flexDemos } from './flex';
import { iconDemos } from './icon';
import { inputDemos } from './input';
import { layoutDemos } from './layout';
import { menuDemos } from './menu';
import { modalDemos } from './modal';
import { radarDemos } from './radar';
import { switchDemos } from './switch';
import { tabsDemos } from './tabs';
import { themeDemos } from './theme';
import { timelineDemos } from './timeline';
import { tooltipDemos } from './tooltip';
import { viewerDemos } from './viewer';

export const menus: UMenuNode[] = [
  {
    name: 'Button 按钮',
    url: 'button',
    demos: buttonDemos,
  },
  {
    name: 'Card 卡片',
    url: 'card',
    demos: cardDemos,
  },
  {
    name: 'Contributions 贡献图',
    url: 'contributions',
    demos: contributionsDemos,
  },
  {
    name: 'Dynamic 动态组件',
    url: 'dynamic',
    demos: dynamicDemos,
  },
  {
    name: 'Flex Flex布局',
    url: 'flex',
    demos: flexDemos,
  },
  {
    name: 'Icon 图标',
    url: 'icon',
    demos: iconDemos,
  },
  {
    name: 'Input 输入框',
    url: 'input',
    demos: inputDemos,
  },
  {
    name: 'Layout 布局',
    url: 'layout',
    demos: layoutDemos,
  },
  {
    name: 'Menu 菜单',
    url: 'menu',
    demos: menuDemos,
  },
  {
    name: 'Modal 模态框',
    url: 'modal',
    demos: modalDemos,
  },
  {
    name: 'Radar 雷达图',
    url: 'radar',
    demos: radarDemos,
  },
  {
    name: 'Switch 开关',
    url: 'switch',
    demos: switchDemos,
  },
  {
    name: 'Tabs 标签页',
    url: 'tabs',
    demos: tabsDemos,
  },
  {
    name: 'Theme 皮肤',
    url: 'theme',
    demos: themeDemos,
  },
  {
    name: 'Timeline 时间线',
    url: 'timeline',
    demos: timelineDemos,
  },
  {
    name: 'Tooltip 文本提示',
    url: 'tooltip',
    demos: tooltipDemos,
  },
  {
    name: 'Viewer 视图',
    url: 'viewer',
    demos: viewerDemos,
  },
];
