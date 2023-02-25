import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, ViewChildren, ElementRef, AfterContentInit
} from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { UBreakpointService } from '../core';

/**
 * Flex方向
 */
// eslint-disable-next-line no-shadow
export enum UFlexDirections {
  row = 'row',
  column = 'column',
  rowReverse = 'row-reverse',
  columnReverse = 'column-reverse'
}
export type UFlexDirectionConstants = 'row' | 'column' | 'row-reverse' | 'column-reverse';

/**
 * Flex横向排列方式
 */
// eslint-disable-next-line no-shadow
export enum UFlexAlignmentHorizontals {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly'
}
export type UFlexAlignmentHorizontalConstants = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

/**
 * Flex纵向排列方式
 */
// eslint-disable-next-line no-shadow
export enum UFlexAlignmentVerticals {
  stretch = 'stretch',
  baseline = 'baseline',
  start = 'flex-start',
  center = 'center',
  end = 'flex-end'
}
export type UFlexAlignmentVerticalConstants = 'stretch' | 'baseline' | 'flex-start' | 'center' | 'flex-end';

@Component({
  selector: 'u-flex',
  exportAs: 'uFlex',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class UFlexComponent {
  /**
   * 方向
   */
  @Input() uDirection: UFlexDirections | UFlexDirectionConstants = UFlexDirections.row;

  /**
   * 方向
   */
  @Input() uDirectionXs: UFlexDirections | UFlexDirectionConstants;

  /**
   * 方向
   */
  @Input() uDirectionSm: UFlexDirections | UFlexDirectionConstants;

  /**
   * 方向
   */
  @Input() uDirectionMd: UFlexDirections | UFlexDirectionConstants;

  /**
   * 方向
   */
  @Input() uDirectionLg: UFlexDirections | UFlexDirectionConstants;

  /**
   * 方向
   */
  @Input() uDirectionXl: UFlexDirections | UFlexDirectionConstants;

  /**
   * 横向排列
   */
  @Input() uAlignmentHorizontal: UFlexAlignmentHorizontals | UFlexAlignmentHorizontalConstants = UFlexAlignmentHorizontals.start;

  /**
   * 竖向排列
   */
  @Input() uAlignmentVertical: UFlexAlignmentVerticals | UFlexAlignmentVerticalConstants = UFlexAlignmentVerticals.stretch;

  /**
   * 间距
   */
  @Input() uGap = 0;

  /**
   * 是否换行
   */
  @Input() uWrap = false;

  @HostBinding('class.u-flex-container')
  get classFlexContainer(): boolean {
    return true;
  }

  @HostBinding('class.u-flex-wrap')
  get classFlexWrap(): boolean {
    return this.uWrap;
  }

  @HostBinding('class.u-flex-row')
  get classFlexRow(): boolean {
    const value = this.directionValue;
    return value === UFlexDirections.row || value === UFlexDirections.rowReverse;
  }

  @HostBinding('class.u-flex-column')
  get classFlexColumn(): boolean {
    const value = this.directionValue;
    return value === UFlexDirections.column || value === UFlexDirections.columnReverse;
  }

  @HostBinding('style.flex-direction')
  get styleFlexDirection(): UFlexDirections | UFlexDirectionConstants {
    return this.directionValue;
  }

  @HostBinding('style.justify-content')
  get styleAignmentHorizontal(): UFlexAlignmentHorizontals | UFlexAlignmentHorizontalConstants {
    return this.uAlignmentHorizontal;
  }

  @HostBinding('style.align-items')
  get styleAignmentVertical(): UFlexAlignmentVerticals | UFlexAlignmentVerticalConstants {
    return this.uAlignmentVertical;
  }

  /**
   * 实际尺寸下的方向
   */
  get directionValue(): UFlexDirections | UFlexDirectionConstants {
    return this.breakpointService.getCurrentSizeValue(this, 'uDirection');
  }

  constructor(private breakpointService: UBreakpointService) { }
}
