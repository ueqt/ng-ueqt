import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getEnumKeyByEnumValue } from '../util';

// eslint-disable-next-line no-shadow
export enum UBreakpoints {
  xs = 'XSmall',
  sm = 'Small',
  md = 'Medium',
  lg = 'Large',
  xl = 'XLarge',
}

export type UBreakpointKey = keyof typeof UBreakpoints;

@Injectable({
  providedIn: 'root',
})
export class UBreakpointService implements OnDestroy {

  // id: xs
  // name: XSmall
  // definition: (max-width: 599.98px)

  destroyed$ = new Subject<void>();
  /**
   * 当前屏幕尺寸ID
   */
  currentScreenSizeId: string;

  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(this.getAllDefinitions())
      .pipe(takeUntil(this.destroyed$))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSizeId = this.getIdFromDefinition(query);
          }
        }
      });
  }


  /**
   * 获取所有的定义
   */
  getAllDefinitions(): string[] {
    return Object.keys(UBreakpoints).map(k => this.getDefinitionFromId(k));
  }

  /**
   * 从定义获取id
   */
  getIdFromDefinition(definition: string): string {
    const key = Object.keys(Breakpoints).find(k => Breakpoints[k] === definition);
    if (!key) {
      return '';
    }
    return getEnumKeyByEnumValue(UBreakpoints, key);
  }

  /**
   * 从xs等获取实际的max-width字符串
   */
  getDefinitionFromId(id: string): string {
    return Breakpoints[UBreakpoints[id]];
  }

  /**
   * 获取当前尺寸下的值
   *
   * @param component 组件
   * @param fieldPrefix 字段前缀
   */
  getCurrentSizeValue(component: any, fieldPrefix: string): any {
    let result = component[fieldPrefix];
    if (!this.currentScreenSizeId) {
      return result;
    }
    const keys = Object.keys(UBreakpoints);
    for (let i = keys.length - 1; i >= 0; i--) {
      const k = keys[i];
      result = component[fieldPrefix + k.substr(0, 1).toUpperCase() + k.substr(1, 1)] || result;
      if (this.currentScreenSizeId === k) {
        return result;
      }
    }
    return result;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
