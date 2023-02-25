语义化的矢量图形。

```ts
import { UIconDirective } from "ng-ueqt";
```

### SVG 图标

- 完全离线化使用，不需要下载字体文件，图标不会因为网络问题呈现方块，同时还支持本地部署。
- 在低端设备上 SVG 有更好的清晰度。

所有的图标都会以 `<svg>` 标签渲染，但是你还是可以用对 i 标签设置的样式和类来控制 svg 的样式，例如：

```html
<i uIcon="left" style="font-size: 16px; color: #08c;"></i>
```

### 静态加载

静态加载，在 `AppModule` 里加入你需要的图标，例如：

```ts
import { UIconDefinition } from 'ng-ueqt';
import { UIconDirective, provideIconChild } from 'ng-ueqt';

// 引入你需要的图标，比如你需要 Left，推荐 ✔️
import { UIconLeft } from 'ng-ueqt/icons';

const icons: UIconDefinition[] = [ UIconLeft ];

// 引入全部的图标，不推荐 ❌
// import { allIconDefs, allIcons, materialIconDefs, primerIconDefs } from 'ng-ueqt';

// const icons: UIconDefinition[] = [ ...allIconDefs ];
// const icons: UIconDefinition[] = [ ...materialIconDefs ];
// const icons: UIconDefinition[] = [ ...primerIconDefs ];
// const icons: UIconDefinition[] = [ allIcons.up, allIcons.down ];

bootstrapApplication(AppComponent, {
  providers: [
    provideIconRoot(icons),
  ]
}).catch(err => console.error(err));

```

### 在子模块中补充图标

有时候，为了避免增大 main.js 的体积，你可能想要从懒加载模块中引入图标，这时你就可以使用 `provideIconChild(icons)` 来追加图标。

```ts
@Component({
  standalone: true,
  imports: [
    UIconDirective
  ],
  providers: [
    provideIconChild(icons)
  ]
})
export class ChildComponent {
}
```

这样，当 `ChildComponent` 加载之后，整个应用都能够使用 UIconLeft 图标。

## API

### [uIcon]

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `[uIcon]` | 图标类型，遵循图标的命名规范 | `string` | |
| `[uIconSize]` | 图标尺寸 | `number` | `16`     |
| `[uIconClass]` | 图标样式类 | `string` | |
