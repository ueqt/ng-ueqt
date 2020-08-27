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

### u-sider

侧边栏。

| 参数                 | 说明                                          | 类型                                            | 默认值  |
| -------------------- | --------------------------------------------- | ----------------------------------------------- | ------- |
| `[uBreakpoint]`      | 触发响应式布局的断点                          | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | -       |  | - |
| `[uCollapsedWidth]`  | 收缩宽度，设置为 0 会出现特殊 trigger         | `number`                                        | `64`    |
| `[uCollapsible]`     | 是否可收起                                    | `boolean`                                       | `false` |
| `[uCollapsed]`       | 当前收起状态，可双向绑定                      | `boolean`                                       | `false` |
| `[uTrigger]`         | 自定义 trigger，设置为 null 时隐藏 trigger    | `TemplateRef<void>`                             | -       |
| `[uZeroTrigger]`     | 自定义 uCollapsedWidth 为 0 时的 特殊 trigger | `TemplateRef<void>`                             | -       |
| `[uWidth]`           | 宽度                                          | `number \| string`                              | `200`   |
| `(uCollapsedChange)` | 展开-收起时的回调函数                         | `EventEmitter<boolean>`                         | -       |

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
