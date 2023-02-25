协助进行页面级整体布局。

```ts
import { ULAYOUTS } from "ng-ueqt";
```

## 设计规则

### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

- 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`。
- 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`。
- 顶部导航高度的范围计算公式为：`48+8n`。
- 侧边导航宽度的范围计算公式：`200+8n`。

### 交互

- 一级导航和末级的导航需要在可视化的层面被强调出来；
- 当前项应该在呈现上优先级最高；
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。

### 视觉

导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

## 组件概述

- `u-layout`：布局容器，其下可嵌套 `u-header` `u-sider` `u-content` `u-footer` 或 `u-layout` 本身，可以放在任何父容器中。
- `u-header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `u-layout` 中。
- `u-sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `u-layout` 中。
- `u-content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `u-layout` 中。
- `u-footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `u-layout` 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

## API

```html
<u-layout>
  <u-header>header</u-header>
  <u-layout>
    <u-sider>left sidebar</u-sider>
    <u-content>main content</u-content>
    <u-sider>right sidebar</u-sider>
  </u-layout>
  <u-footer>footer</u-footer>
</u-layout>
```

### \<u-layout\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |

### \<u-header\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |

### \<u-content\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |

### \<u-footer\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |

### \<u-sider\>

侧边栏。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uBreakpoint]`      | 触发响应式布局的断点 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | |
| `[uCollapsedWidth]`  | 收缩宽度，设置为 0 会出现特殊 trigger | `number` | `80` |
| `[uCollapsible]`     | 是否可收起 |  `boolean` | `false` |
| `[uCollapsed]`       | 当前收起状态，可双向绑定 | `boolean` | `false` |
| `[uTrigger]` | 自定义 trigger，设置为 null 时隐藏 trigger | `TemplateRef<void>` | |
| `[uZeroTrigger]`     | 自定义 uCollapsedWidth 为 0 时的 特殊 trigger | `TemplateRef<void>` | |
| `[uWidth]`           | 宽度 | `number \| string` | `200` |
| `(uCollapsedChange)` | 展开-收起时的回调函数 | `EventEmitter<boolean>` | |

#### breakpoint width

```js
{
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px',
  xxl: '1600px'
}
```

