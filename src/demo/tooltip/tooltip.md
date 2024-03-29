简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

```ts
import { UTooltipDirective } from 'ng-ueqt';
```

## API

### [uTooltip]

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uTooltip]` | 提示文字 | `string \| TemplateRef<void>` | |
| `[uTooltipTrigger]` | 触发行为，可选 `hover/focus/click`，为 `null` 时不响应光标事件 | `'click' \| 'focus' \| 'hover' \| null` | `'hover'` |
| `[uTooltipPlacement]` | 气泡框位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| `[uTooltipOrigin]` | 气泡框定位元素 | `ElementRef` | |
| `[uTooltipVisible]` | 显示隐藏气泡框 | `boolean` | `false` |
| `(uTooltipVisibleChange)` | 显示隐藏的事件 | `EventEmitter<boolean>` | |
| `[uTooltipOverlayClassName]` | 卡片类名 | `string` | |
| `[uTooltipOverlayStyle]` | 卡片样式 | `object` | |

### 方法

| 方法 | 说明 |
| --- | --- |
| `show` | 打开 |
| `hide` | 隐藏 |
| `updatePosition` | 调整位置 |

## 非body滚轴事件需要更新CDK的位置

在tooltip组件使用中，body的滚轴事件会刷新tooltip的位置。如果是自定义容器的滚轴事件则不会刷新，你可以在自定义容器上添加 `cdkScrollable` 指令以达到该目的。注意，这里需要导入相关的包 `import {ScrollingModule} from '@angular/cdk/scrolling';`，更多信息请参考 [scrolling/api](https://material.angular.io/cdk/scrolling/api)。

## 注意

请确保 `[uTooltip]` 元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。