import {
  AfterViewInit,
  Directive,
  ElementRef,
  Host,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges,
  HostBinding,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { URowDirective } from './row.directive';
import { isNotNil, UObject } from '../core/util';

export interface EmbeddedProperty {
  col?: number;
  pull?: number;
  push?: number;
  offset?: number;
  order?: number;
}

@Directive({
  selector: '[uCol]',
  exportAs: 'uCol',
})
export class UColDirective
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private classMap: { [key: string]: boolean } = {};
  private destroy$ = new Subject();
  hostFlexStyle: string | null = null;

  @Input('uCol') uSpan: string | number | null = null;
  @Input() uFlex: string | number | null = null;
  @Input() uOrder: string | number | null = null;
  @Input() uOffset: string | number | null = null;
  @Input() uPush: string | number | null = null;
  @Input() uPull: string | number | null = null;
  @Input() uXs: string | number | EmbeddedProperty | null = null;
  @Input() uSm: string | number | EmbeddedProperty | null = null;
  @Input() uMd: string | number | EmbeddedProperty | null = null;
  @Input() uLg: string | number | EmbeddedProperty | null = null;
  @Input() uXl: string | number | EmbeddedProperty | null = null;
  @Input() uXXl: string | number | EmbeddedProperty | null = null;

  @HostBinding('style.flex') get styleFlex(): string {
    return this.hostFlexStyle;
  }

  setHostClassMap(): void {
    const hostClassMap = {
      ['u-col']: true,
      [`u-col-${this.uSpan}`]: isNotNil(this.uSpan),
      [`u-col-order-${this.uOrder}`]: isNotNil(this.uOrder),
      [`u-col-offset-${this.uOffset}`]: isNotNil(this.uOffset),
      [`u-col-pull-${this.uPull}`]: isNotNil(this.uPull),
      [`u-col-push-${this.uPush}`]: isNotNil(this.uPush),
      ...this.generateClass(),
    };
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = { ...hostClassMap };
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }

  setHostFlexStyle(): void {
    this.hostFlexStyle = this.parseFlex(this.uFlex);
  }

  parseFlex(flex: number | string | null): string | null {
    if (typeof flex === 'number') {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === 'string') {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }

  generateClass(): object {
    const listOfSizeInputName: Array<keyof UColDirective> = [
      'uXs',
      'uSm',
      'uMd',
      'uLg',
      'uXl',
      'uXXl',
    ];
    const listClassMap: UObject = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace('u', '').toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === 'number' || typeof this[name] === 'string') {
          listClassMap[`u-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name] as EmbeddedProperty;
          const prefixArray: Array<keyof EmbeddedProperty> = [
            'col',
            'pull',
            'push',
            'offset',
            'order',
          ];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === 'col' ? '-' : `-${prefix}-`;
            listClassMap[`u-col-${sizeName}${prefixClass}${embedded[prefix]}`] =
              embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }

  constructor(
    private elementRef: ElementRef,
    @Optional() @Host() public nzRowDirective: URowDirective,
    public renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setHostClassMap();
    this.setHostFlexStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setHostClassMap();
    const { uFlex } = changes;
    if (uFlex) {
      this.setHostFlexStyle();
    }
  }

  ngAfterViewInit(): void {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$
        .pipe(takeUntil(this.destroy$))
        .subscribe(([horizontalGutter, verticalGutter]) => {
          const renderGutter = (name: string, gutter: number | null) => {
            const nativeElement = this.elementRef.nativeElement;
            if (gutter !== null) {
              this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
            }
          };
          renderGutter('padding-left', horizontalGutter);
          renderGutter('padding-right', horizontalGutter);
          renderGutter('padding-top', verticalGutter);
          renderGutter('padding-bottom', verticalGutter);
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
