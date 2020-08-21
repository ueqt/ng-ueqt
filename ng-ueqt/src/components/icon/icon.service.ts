import { UIconDefinition } from './icon.model';
import {
  Injectable,
  InjectionToken,
  Optional,
  Inject,
  Self,
  Injector,
} from '@angular/core';

export const U_ICONS = new InjectionToken<UIconDefinition[]>('u_icons');

@Injectable({
  providedIn: 'root',
})
export class UIconService {
  icons: UIconDefinition[] = [];
  constructor(@Inject(U_ICONS) iconDefinitions: UIconDefinition[]) {
    this.addIcons(iconDefinitions);
  }

  addIcons(icons: UIconDefinition[]): void {
    if (!icons) {
      return;
    }
    icons.forEach((icon) => {
      const found = this.icons.find((i) => i.name === icon.name);
      if (!found) {
        this.icons.push(icon);
      }
    });
  }
}

export const U_ICONS_PATCH = new InjectionToken<UIconDefinition[]>(
  'u_icons_patch'
);

@Injectable()
export class UIconPatchService {
  patched = false;
  constructor(
    @Self() @Inject(U_ICONS_PATCH) private extraIcons: UIconDefinition[],
    private rootIconService: UIconService
  ) {}

  doPatch(): void {
    if (this.patched) {
      return;
    }
    this.rootIconService.addIcons(this.extraIcons);
    this.patched = true;
  }
}
