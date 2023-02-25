选项卡切换组件。

```ts
import { UTabsComponent } from "ng-ueqt";
```

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## API

### \<u-tabs\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uSelectedIndex]` | 当前激活 tab 面板的 序列号，可双向绑定 | `number` | |
| `(uSelectedIndexChange)` | 当前激活 tab 面板的 序列号变更回调函数 | `EventEmitter<number>` | |

### \<u-tab\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uTitle]`       | 选项卡头显示文字 | `string` | |
| `[uCustomTitle]` | 自定义标题 | `TemplateRef<void>` | |
| `[uDisabled]`    | 是否禁用 | `boolean` | |
| `(uClick)`       | title 被点击的回调函数 | `EventEmitter<void>` | |
