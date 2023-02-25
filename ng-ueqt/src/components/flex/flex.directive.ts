import { Directive, ElementRef, Host, HostBinding, Input, Optional } from '@angular/core';
import { UBreakpointService } from '../core';
import { UFlexComponent, UFlexDirections } from './flex.component';

/**
 * Flex参数
 */
@Directive({
  selector: '[uFlex]',
  exportAs: 'uFlex',
  standalone: true,
})
export class UFlexDirective {
  /**
   * Flex参数
   */
  @Input() uFlex: number | string;

  /**
   * Flex参数
   */
  @Input() uFlexXs: number | string;

  /**
   * Flex参数
   */
  @Input() uFlexSm: number | string;

  /**
   * Flex参数
   */
  @Input() uFlexMd: number | string;

  /**
   * Flex参数
   */
  @Input() uFlexLg: number | string;

  /**
   * Flex参数
   */
  @Input() uFlexXl: number | string;

  @HostBinding('class.u-flex')
  get classFlex(): boolean {
    return true;
  }

  @HostBinding('style.flex')
  get styleFlex(): number | string {
    const value = this.flexValue;
    if (!isNaN(+value)) {
      // 数字就是百分比
      return `1 1 ${value}%`;
    } else if (value === 'auto') {
      // 自动
      return '1 1 0%';
    } else {
      // 绝对像素
      return `1 1 ${value}`;
    }
  }

  @HostBinding('style.max-width')
  get styleMaxWidth(): string {
    const value = this.flexValue;
    if (this.parentFlex.uDirection !== UFlexDirections.row &&
      this.parentFlex.uDirection !== UFlexDirections.rowReverse) {
      return undefined;
    }
    if (!isNaN(+value)) {
      return value.toString() + '%';
    } else if (value !== 'auto') {
      return value.toString();
    }
    return undefined;
  }

  @HostBinding('style.max-height')
  get styleMaxHeight(): string {
    const value = this.flexValue;
    if (this.parentFlex.uDirection !== UFlexDirections.column &&
      this.parentFlex.uDirection !== UFlexDirections.columnReverse) {
      return undefined;
    }
    if (!isNaN(+value)) {
      return value.toString() + '%';
    } else if (value !== 'auto') {
      return value.toString();
    }
    return undefined;
  }

  @HostBinding('style.padding')
  get stylePadding(): string {
    return (this.parentFlex.uGap / 2) + 'px';
  }

  @HostBinding('class.u-flex-has-gap-children')
  get classFlexHasGapChildren(): boolean {
    if (!this.parentFlex.uGap) {
      return false;
    }
    return this.element.nativeElement.children.length > 0;
  }

  /**
   * 实际尺寸下的Flex值
   */
  get flexValue(): any {
    return this.breakpointService.getCurrentSizeValue(this, 'uFlex');
  }

  constructor(
    private element: ElementRef,
    private breakpointService: UBreakpointService,
    @Optional() @Host() private parentFlex: UFlexComponent) {
  }
}
