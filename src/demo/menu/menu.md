为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

```ts
import { UMenuComponent } from "ng-ueqt";
```

## API

### \<u-menu\>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uDatas]`      | 绑定的数据     | `UMenuNode[]` | |
| `[uCustomNode]` | 自定义节点模板 | `TemplateRef<UMenuNode>` | |
| `[uMode]` | 模式 | `'vertical' \| 'horizontal' \| 'inline'` |  `'inline'` |
| `(uNodeClick)`  | 点击节点事件   | `EventEmitter<UMenuFlatNode>` | |
