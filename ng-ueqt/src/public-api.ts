/*
 * Public API Surface of ng-ueqt
 */

import * as PrimerIcons from './components/icon/primer-icons';
import * as MaterialIcons from './components/icon/material-icons';
import { UIconDefinition } from './components/icon';

// toFixed四舍五入逻辑在chrome不正确，所以重载
// eslint-disable-next-line space-before-function-paren
Number.prototype.toFixed = function (n: number) {
  const source = this;
  const power = Math.pow(10, n);
  return (Math.round(source + Number.EPSILON) * power / power).toString();
};

export const primerIcons = PrimerIcons as {
  [key: string]: UIconDefinition;
};
export const primerIconDefs: UIconDefinition[] = Object.keys(primerIcons).map(key => primerIcons[key]);
export const materialIcons = MaterialIcons as {
  [key: string]: UIconDefinition;
};
export const materialIconDefs: UIconDefinition[] = Object.keys(materialIcons).map(key => materialIcons[key]);
export const allIcons = { ...PrimerIcons, ...MaterialIcons } as {
  [key: string]: UIconDefinition;
};
export const allIconDefs: UIconDefinition[] = Object.keys(allIcons).map(key => allIcons[key]);
export * from './components/button';
export * from './components/card';
export * from './components/contributions';
export * from './components/core';
export * from './components/dynamic';
export * from './components/flex';
export * from './components/icon';
export * from './components/input';
export * from './components/layout';
export * from './components/menu';
export * from './components/modal';
export * from './components/radar';
export * from './components/switch';
export * from './components/tabs';
export * from './components/theme';
export * from './components/timeline';
export * from './components/tooltip';
export * from './components/viewer';

