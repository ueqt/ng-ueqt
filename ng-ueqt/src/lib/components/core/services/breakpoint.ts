import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { UResizeService } from './resize';

export enum UBreakpointEnum {
  xxl = 'xxl',
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

export type BreakpointMap = { [key in UBreakpointEnum]: string };
export type BreakpointBooleanMap = { [key in UBreakpointEnum]: boolean };
export type UBreakpointKey = keyof typeof UBreakpointEnum;

export const gridResponsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

export const siderResponsiveMap: BreakpointMap = {
  xs: '(max-width: 479.98px)',
  sm: '(max-width: 575.98px)',
  md: '(max-width: 767.98px)',
  lg: '(max-width: 991.98px)',
  xl: '(max-width: 1199.98px)',
  xxl: '(max-width: 1599.98px)',
};

@Injectable({
  providedIn: 'root',
})
export class UBreakpointService {
  constructor(
    private resizeService: UResizeService,
    private mediaMatcher: MediaMatcher
  ) {
    this.resizeService.subscribe().subscribe(() => {});
  }

  subscribe(breakpointMap: BreakpointMap): Observable<UBreakpointEnum>;
  subscribe(
    breakpointMap: BreakpointMap,
    fullMap: true
  ): Observable<BreakpointBooleanMap>;
  subscribe(
    breakpointMap: BreakpointMap,
    fullMap?: true
  ): Observable<UBreakpointEnum | BreakpointBooleanMap> {
    if (fullMap) {
      const get = () => this.matchMedia(breakpointMap, true);
      return this.resizeService.subscribe().pipe(
        map(get),
        startWith(get()),
        distinctUntilChanged(
          (
            x: [UBreakpointEnum, BreakpointBooleanMap],
            y: [UBreakpointEnum, BreakpointBooleanMap]
          ) => x[0] === y[0]
        ),
        map((x) => x[1])
      );
    } else {
      const get = () => this.matchMedia(breakpointMap);
      return this.resizeService
        .subscribe()
        .pipe(map(get), startWith(get()), distinctUntilChanged());
    }
  }

  private matchMedia(breakpointMap: BreakpointMap): UBreakpointEnum;
  private matchMedia(
    breakpointMap: BreakpointMap,
    fullMap: true
  ): [UBreakpointEnum, BreakpointBooleanMap];
  private matchMedia(
    breakpointMap: BreakpointMap,
    fullMap?: true
  ): UBreakpointEnum | [UBreakpointEnum, BreakpointBooleanMap] {
    let bp = UBreakpointEnum.md;

    const breakpointBooleanMap: Partial<BreakpointBooleanMap> = {};

    Object.keys(breakpointMap).map((breakpoint) => {
      const castBP = breakpoint as UBreakpointEnum;
      const matched = this.mediaMatcher.matchMedia(gridResponsiveMap[castBP])
        .matches;

      breakpointBooleanMap[breakpoint as UBreakpointEnum] = matched;

      if (matched) {
        bp = castBP;
      }
    });

    if (fullMap) {
      return [bp, breakpointBooleanMap as BreakpointBooleanMap];
    } else {
      return bp;
    }
  }
}
