Flex布局。

```ts
import { UFlexComponent } from 'ng-ueqt';
```

## API

### \<u-flex\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uDirection(Xs|Sm|Md|Lg|Xl)]` | 方向 | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` |
| `[uAlignmentHorizontal]` | 横向排列方式 | `'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| `[uAlignmentVertical]` | 纵向排列方式 | `'stretch' \| 'baseline' \| 'start' \| 'center' \|  'end'` | `'stretch'` |
| `[uGap]` | 间隔像素 | `number` | `0` |
| `[uWrap]` | 是否换行 | `boolean` | `false` |

### [u-flex]

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uFlex(Xs|Sm|Md|Lg|Xl)]` | 大小设置(数字表示百分比, xx`px`表示绝对像素，auto表示自动定位) | `number | string` | '100' |

