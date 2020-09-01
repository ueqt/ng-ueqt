## API

### [uRow]

| 成员         | 说明                                                                                                                                       | 类型                                                                | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ------ |
| `[uAlign]`   | 垂直对齐方式                                                                                                                               | `'top' \| 'middle' \| 'bottom'`                                     | -      |
| `[uGutter]`  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 `[水平间距, 垂直间距]`。 | `number\|object\|[number, number]\|[object, object]`                | -      |
| `[uJustify]` | 水平排列方式                                                                                                                               | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between'` | -      |

### [uCol]

| 成员        | 说明                                                     | 类型               | 默认值 |
| ----------- | -------------------------------------------------------- | ------------------ | ------ |
| `[uCol]`    | 栅格占位格数，为 0 时相当于 `display: none`              | `number`           | -      |
| `[uFlex]`   | flex 布局属性                                            | `string \| number` | -      |
| `[uOffset]` | 栅格左侧的间隔格数，间隔内不可以有栅格                   | `number`           | -      |
| `[uOrder]`  | 栅格顺序                                                 | `number`           | -      |
| `[uPull]`   | 栅格向左移动格数                                         | `number`           | -      |
| `[uPush]`   | 栅格向右移动格数                                         | `number`           | -      |
| `[uXs]`     | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |
| `[uSm]`     | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |
| `[uMd]`     | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |
| `[uLg]`     | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number \| object` | -      |
| `[uXl]`     | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | -      |
| `[uXXl]`    | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | -      |

响应式栅格的断点扩展自 [BootStrap 4 的规则](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints)（不包含链接里 `occasionally` 的部分)。