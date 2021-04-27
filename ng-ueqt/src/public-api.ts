/*
 * Public API Surface of ng-ueqt
 */

import * as PrimerIcons from './components/icon/primer-icons';

// toFixed四舍五入逻辑在chrome不正确，所以重载
// tslint:disable-next-line: typedef space-before-function-paren
Number.prototype.toFixed = function (n: number) {
  const source = this;
  const power = Math.pow(10, n);
  return (Math.round(source + Number.EPSILON) * power / power).toString();
};

export * from './components/contributions';
export * from './components/core';
export * from './components/icon';
export const AllIcons = PrimerIcons;
export * from './components/layout';
export * from './components/menu';
export * from './components/radar';
export * from './components/tabs';
export * from './components/tooltip';
export * from './components/button';
export * from './components/card';
export * from './components/theme';
export * from './components/modal';
export * from './components/input';
export * from './components/switch';
export * from './components/dynamic';
