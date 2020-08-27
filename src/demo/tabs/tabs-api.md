## API

### u-tabs

| 参数                     | 说明                                   | 类型                                               | 默认值 |
| ------------------------ | -------------------------------------- | -------------------------------------------------- | ------ |
| `[uSelectedIndex]`       | 当前激活 tab 面板的 序列号，可双向绑定 | `number`                                           | -      |
| `(uSelectedIndexChange)` | 当前激活 tab 面板的 序列号变更回调函数 | `EventEmitter<number>`                             | -      |
| `(uSelectChange)`        | 当前激活 tab 面板变更回调函数          | `EventEmitter<{index: number,tab: UTabComponent}>` | -      |

### u-tab

| 参数             | 说明                     | 类型                 | 默认值 |
| ---------------- | ------------------------ | -------------------- | ------ |
| `[uTitle]`       | 选项卡头显示文字         | `string`             |        |
| `[uCustomTitle]` | 自定义标题               | `TemplateRef<void>`  |        |
| `[uDisabled]`    | 是否禁用                 | `boolean`            | -      |
| `(uClick)`       | title 被点击的回调函数   | `EventEmitter<void>` | -      |
| `(uSelect)`      | tab 被选中的回调函数     | `EventEmitter<void>` | -      |
| `(uDeselect)`    | tab 被取消选中的回调函数 | `EventEmitter<void>` | -      |

### [u-tab]

与 `ng-template` 一同使用，用于标记需要懒加载的 `tab` 内容，具体用法见示例。
