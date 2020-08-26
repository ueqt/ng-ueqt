import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  HostBinding,
} from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  gridResponsiveMap,
  UBreakpointKey,
  UBreakpointService,
} from '../core/services';
import { UObject } from '../core/util';

/**
 * 水平排列方式
 */
export type UJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

/**
 * 垂直对齐方式
 */
export type UAlign = 'top' | 'middle' | 'bottom';

@Directive({
  selector: '[uRow]',
  exportAs: 'uRow',
})
export class URowDirective
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  /**
   * 垂直对齐方式
   */
  @Input() uAlign: UAlign | null = null;
  /**
   * 水平排列方式
   */
  @Input() uJustify: UJustify | null = null;
  /**
   * 栅格间隔
   *
   * 可以写成像素值或支持响应式的对象写法来设置水平间隔
   * { xs: 8, sm: 16, md: 24}。
   * 或者使用数组形式同时设置 [水平间距, 垂直间距]。
   */
  @Input() uGutter:
    | number
    | UObject
    | [number, number]
    | [UObject, UObject]
    | null = null;

  @HostBinding('class.u-row') classRow = true;
  @HostBinding('class.u-row-top') get classRowTop(): boolean {
    return this.uAlign === 'top';
  }
  @HostBinding('class.u-row-middle') get classRowMiddle(): boolean {
    return this.uAlign === 'middle';
  }
  @HostBinding('class.u-row-bottom') get classRowBottom(): boolean {
    return this.uAlign === 'bottom';
  }
  @HostBinding('class.u-row-start') get classRowStart(): boolean {
    return this.uJustify === 'start';
  }
  @HostBinding('class.u-row-end') get classRowEnd(): boolean {
    return this.uJustify === 'end';
  }
  @HostBinding('class.u-row-center') get classRowCenter(): boolean {
    return this.uJustify === 'center';
  }
  @HostBinding('class.u-row-space-around') get classRowSpaceAround(): boolean {
    return this.uJustify === 'space-around';
  }
  @HostBinding('class.u-row-space-between')
  get classRowSpaceBetween(): boolean {
    return this.uJustify === 'space-between';
  }

  readonly actualGutter$ = new ReplaySubject<[number | null, number | null]>(1);

  private readonly destroy$ = new Subject();

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2,
    public mediaMatcher: MediaMatcher,
    public ngZone: NgZone,
    public platform: Platform,
    private breakpointService: UBreakpointService
  ) {}

  ngOnInit(): void {
    this.setGutterStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {
      this.breakpointService
        .subscribe(gridResponsiveMap)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setGutterStyle();
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getGutter(): [number | null, number | null] {
    const results: [number | null, number | null] = [null, null];
    const gutter = this.uGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object' && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen: string) => {
          const bp = screen as UBreakpointKey;
          if (
            this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches &&
            g[bp]
          ) {
            results[index] = g[bp] as number;
          }
        });
      } else {
        results[index] = g || null;
      }
    });
    return results;
  }

  setGutterStyle(): void {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name: string, gutter: number | null) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter('margin-left', horizontalGutter);
    renderGutter('margin-right', horizontalGutter);
    renderGutter('margin-top', verticalGutter);
    renderGutter('margin-bottom', verticalGutter);
  }
}
