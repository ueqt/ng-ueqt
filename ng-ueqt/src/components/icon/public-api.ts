import * as PrimerIcons from './primer-icons';
import * as MaterialIcons from './material-icons';
import { UIconDefinition } from './icon.model';

export const primerIcons = PrimerIcons;
const primerIconKeys = PrimerIcons as {
  [key: string]: UIconDefinition;
};
export const primerIconDefs: UIconDefinition[] = Object.keys(primerIconKeys).map(key => primerIconKeys[key]);
export const materialIcons = MaterialIcons;
const materialIconKeys = MaterialIcons as {
  [key: string]: UIconDefinition;
};
export const materialIconDefs: UIconDefinition[] = Object.keys(materialIconKeys).map(key => materialIconKeys[key]);
export const allIcons = {...primerIcons, ...materialIcons};
const allIconKeys = { ...PrimerIcons, ...MaterialIcons } as {
  [key: string]: UIconDefinition;
};
export const allIconDefs: UIconDefinition[] = Object.keys(allIconKeys).map(key => allIconKeys[key]);

export * from './icon.model';
export * from './icon.directive';
export * from './icon.provider';
