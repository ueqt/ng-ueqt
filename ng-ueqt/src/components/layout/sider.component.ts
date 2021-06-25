import { UMenuComponent } from './../menu/menu.component';
import { Platform } from '@angular/cdk/platform';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import {
  UBreakpointKey,
  UBreakpoints,
  UBreakpointService,
} from '../core/services';
import { InputBoolean, toCssPixel } from '../core/util';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'u-sider',
  exportAs: 'uSider',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="u-layout-sider-children">
      <ng-content></ng-content>
    </div>
    <u-sider-trigger
      *ngIf="uCollapsible && uTrigger !== null"
      [matchBreakPoint]="matchBreakPoint"
      [uCollapsedWidth]="uCollapsedWidth"
      [uCollapsed]="uCollapsed"
      [uBreakpoint]="uBreakpoint"
      [uTrigger]="uTrigger"
      [uZeroTrigger]="uZeroTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!uCollapsed)"
    ></u-sider-trigger>
  `,
})
export class USiderComponent implements OnInit, OnDestroy, OnChanges {
  // static ngAcceptInputType_nzCollapsible: BooleanInput;
  // static ngAcceptInputType_nzCollapsed: BooleanInput;

  @ContentChild(UMenuComponent) uMenu: UMenuComponent | null = null;

  private destroy$ = new Subject();
  private flexSetting: string | null = null;
  widthSetting: string | null = null;
  matchBreakPoint = false;

  /**
   * 触发响应式布局的断点
   */
  @Input() uBreakpoint: UBreakpointKey | null = null;

  /**
   * 收缩宽度，设置为 0 会出现特殊 trigger
   */
  @Input() uCollapsedWidth = 80;
  /**
   * 是否可收起
   */
  @Input() @InputBoolean() uCollapsible = false;
  /**
   * 当前收起状态，可双向绑定
   */
  @Input() @InputBoolean() uCollapsed = false;
  /**
   * 自定义 trigger，设置为 null 时隐藏 trigger
   */
  @Input() uTrigger: TemplateRef<void> | undefined | null = undefined;
  /**
   * 自定义 uCollapsedWidth 为 0 时的 特殊 trigger
   */
  @Input() uZeroTrigger: TemplateRef<void> | null = null;
  /**
   * 宽度
   */
  @Input() uWidth: string | number = 200;

  /**
   * 展开-收起时的回调函数
   */
  @Output() readonly uCollapsedChange = new EventEmitter();

  @HostBinding('class.u-layout-sider') layoutSider = true;
  @HostBinding('class.u-layout-sider-collapsed')
  get layoutSiderCollapsed(): boolean {
    return this.uCollapsed;
  }
  @HostBinding('style.flex') get flex(): string {
    return this.flexSetting;
  }
  @HostBinding('style.maxWidth') get maxWidth(): string {
    return this.widthSetting;
  }
  @HostBinding('style.minWidth') get minWidth(): string {
    return this.widthSetting;
  }
  @HostBinding('style.width') get width(): string {
    return this.widthSetting;
  }
  @HostBinding('class.u-layout-sider-zero-width')
  get layoutSiderZeroWidth(): boolean {
    return this.uCollapsed && this.uCollapsedWidth === 0;
  }

  constructor(
    private platform: Platform,
    private cdr: ChangeDetectorRef,
    private breakpointService: UBreakpointService
  ) {}

  ngOnInit(): void {
    this.updateStyleMap();

    if (this.platform.isBrowser) {
      this.breakpointService.breakpointObserver.observe(
        this.breakpointService.getAllDefinitions()
      ).pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          const breakpoint = this.uBreakpoint;
          if (breakpoint) {
            this.inNextTick().subscribe(() => {
              this.matchBreakPoint = !result.breakpoints[this.breakpointService.getDefinitionFromId(breakpoint)];
              this.setCollapsed(this.matchBreakPoint);
              this.cdr.markForCheck();
            });
          }
        });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { uCollapsed, uCollapsedWidth, uWidth } = changes;
    if (uCollapsed || uCollapsedWidth || uWidth) {
      this.updateStyleMap();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  setCollapsed(collapsed: boolean): void {
    if (collapsed !== this.uCollapsed) {
      this.uCollapsed = collapsed;
      this.uCollapsedChange.emit(collapsed);
      this.updateStyleMap();
      this.cdr.markForCheck();
    }
  }

  private inNextTick(): Observable<void> {
    const timer = new Subject<void>();
    Promise.resolve().then(() => timer.next());
    return timer.pipe(take(1));
  }

  private updateStyleMap(): void {
    this.widthSetting = this.uCollapsed
      ? `${this.uCollapsedWidth}px`
      : toCssPixel(this.uWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
    this.cdr.markForCheck();
  }
}
