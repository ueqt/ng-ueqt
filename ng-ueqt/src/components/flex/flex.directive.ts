import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

/**
 * Flex参数
 */
@Directive({
  selector: '[uFlex]',
  exportAs: 'uFlex',
})
export class UFlexDirective {
  /**
   * Flex参数
   */
  @Input() uFlex: number | string;

  @HostBinding('class.u-flex')
  get classFlex(): boolean {
    return true;
  }

  @HostBinding('style.flex')
  get styleFlex(): number | string {
    if (!isNaN(+this.uFlex)) {
      // 数字就是百分比
      return `1 1 ${this.uFlex}%`;
    } else if (this.uFlex === 'auto') {
      // 自动
      return '1 1 0%';
    } else {
      // 绝对像素
      return `1 1 ${this.uFlex}`;
    }
  }

  @HostBinding('style.max-width')
  get styleMaxWidth(): string {
    if (!this.selfElement.parentElement.className.includes('u-flex-row')) {
      return undefined;
    }
    if (!isNaN(+this.uFlex)) {
      return this.uFlex.toString() + '%';
    } else if (this.uFlex !== 'auto') {
      return this.uFlex.toString();
    }
    return undefined;
  }

  @HostBinding('style.max-height')
  get styleMaxHeight(): string {
    if (!this.selfElement.parentElement.className.includes('u-flex-column')) {
      return undefined;
    }
    if (!isNaN(+this.uFlex)) {
      return this.uFlex.toString() + '%';
    } else if (this.uFlex !== 'auto') {
      return this.uFlex.toString();
    }
    return undefined;
  }

  private selfElement: HTMLElement;

  constructor(public element: ElementRef) {
    this.selfElement = element.nativeElement;
  }
}
