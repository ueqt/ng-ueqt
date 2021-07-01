语义化的矢量图形。

```ts
import { UIconModule } from "ng-ueqt";
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
import { UIconModule } from 'ng-ueqt';

// 引入你需要的图标，比如你需要 Left，推荐 ✔️
import { UIconLeft } from 'ng-ueqt/icons';

const icons: UIconDefinition[] = [ UIconLeft ];

// 引入全部的图标，不推荐 ❌
// import { allIcons } from 'ng-ueqt';

// const primerIcons = allIcons as {
//   [key: string]: UIconDefinition;
// };
// const icons: UIconDefinition[] = Object.keys(primerIcons).map(key => primerIcons[key])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UIconModule.forRoot(icons)
  ]
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
```

### 在子模块中补充图标

有时候，为了避免增大 main.js 的体积，你可能想要从懒加载模块中引入图标，这时你就可以使用 `UIconModule.forChild` 来追加图标。

```ts
@NgModule({
  imports: [UIconModule.forChild([UIconLeft])],
})
class ChildIconModule {}

@NgModule({
  imports: [CommonModule, ChildIconModule],
})
class ChildModule {}
```

这样，当 `ChildModule` 加载之后，整个应用都能够使用 UIconLeft 图标。

当然，不要忘记在 `U_ICONS` 中删除该图标。

注意，一定要单独定义一个IconModule，否则会覆盖`ChildModule`里其他module定义的`icon`
