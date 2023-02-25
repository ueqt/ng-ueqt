import { makeEnvironmentProviders } from '@angular/core';
import { UIconDefinition } from './icon.model';
import { UIconPatchService, UIconService, U_ICONS, U_ICONS_PATCH } from './icon.service';

// https://www.angulararchitects.io/aktuelles/patterns-for-custom-standalone-apis-in-angular/
export const provideIconRoot = (icons: UIconDefinition[]) => makeEnvironmentProviders([
  UIconService,
  {
    provide: U_ICONS,
    useValue: icons,
  },
]);

export const provideIconChild = (icons: UIconDefinition[]) => [
  UIconPatchService,
  {
    provide: U_ICONS_PATCH,
    useValue: icons,
  },
];
