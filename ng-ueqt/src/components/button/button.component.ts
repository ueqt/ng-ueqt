import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { getContrastHex } from '../core/util';

@Component({
  selector: 'u-button',
  exportAs: 'uButton',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class UButtonComponent {

  /**
   * 点击事件(只要传事件方法名，用箭头函数写)
   */
  @Input() uClick: (button: UButtonComponent, args: any, event: Event) => Promise<void>;

  /**
   * 点击事件参数
   */
  @Input() uClickArgs: any;

  /**
   * 颜色
   */
  @Input() uColor = 'var(--u-primary)';

  /**
   * 是否禁用
   */
  @Input() uDisabled = false;

  /**
   * 是否仅图标模式
   */
  @Input() uIconOnly = false;

  /**
   * 图形样式
   */
  @Input() uShape: 'rectangle' | 'circle';

  @HostBinding('class.u-button') classButton = true;

  @HostBinding('class.u-button-circle') get classButtonCircle(): boolean {
    return this.uShape === 'circle';
  }

  @HostBinding('class.u-button-icon-only') get classButtonIconOnly(): boolean {
    return this.uIconOnly;
  }

  @HostBinding('attr.disabled') get isDisabled(): boolean {
    return this.uDisabled || null;
  }

  @HostBinding('class.u-button-loading')
  get classButtonLoading(): boolean {
    return this.isLoading;
  }

  @HostBinding('style.background-color')
  get styleButtonBackgroundColor(): string {
    return this.uColor;
  }

  @HostBinding('style.color')
  get styleButtonColor(): string {
    return getContrastHex(this.uColor);
  }

  // @HostBinding('style.border-color')
  // get styleButtonBorderColor(): string {
  //     return getContrastHex(this.uColor);
  // }

  isLoading = false;

  @HostListener('click', ['$event']) async onClick(event: Event): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    if (this.uDisabled || this.isLoading) {
      // console.log(event);
      return;
    }

    this.isLoading = true;

    if (this.uClick) {
      try {
        await this.uClick(this, this.uClickArgs, event);
      } catch (e) {
        throw e;
      } finally {
        this.isLoading = false;
      }
    }
    this.isLoading = false;
  }

}
