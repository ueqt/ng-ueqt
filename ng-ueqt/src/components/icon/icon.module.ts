import { UIconDirective } from './icon.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { UIconDefinition } from './icon.model';
import {
  U_ICONS,
  U_ICONS_PATCH,
  UIconPatchService,
  UIconService,
} from './icon.service';

@NgModule({
  declarations: [UIconDirective],
  exports: [UIconDirective],
  imports: [],
})
export class UIconModule {
  static cacheIcons: UIconDefinition[] = [];

  static forRoot(icons: UIconDefinition[]): ModuleWithProviders<UIconModule> {
    return {
      ngModule: UIconModule,
      providers: [
        UIconService,
        {
          provide: U_ICONS,
          useValue: icons,
        },
      ],
    };
  }

  static addIcons(icons: UIconDefinition[]): void {
    if (!icons) {
      return;
    }
    icons.forEach((icon) => {
      const found = UIconModule.cacheIcons.find((i) => i.name === icon.name);
      if (!found) {
        UIconModule.cacheIcons.push(icon);
      }
    });
  }

  static forChild(icons: UIconDefinition[]): ModuleWithProviders<UIconModule> {
    UIconModule.addIcons(icons);
    return {
      ngModule: UIconModule,
      providers: [
        UIconPatchService,
        {
          provide: U_ICONS_PATCH,
          useValue: UIconModule.cacheIcons,
        },
      ],
    };
  }
}
