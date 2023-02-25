import { Directive } from '@angular/core';

/**
 * 用于懒加载标记
 */
@Directive({
  selector: '[uTab]',
  exportAs: 'uTab',
  standalone: true,
})
export class UTabDirective {}
