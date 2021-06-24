import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding, ViewChildren, ElementRef, AfterContentInit
} from '@angular/core';

/**
 * Flex方向
 */
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flex.component.html'
})
export class UFlexComponent implements AfterContentInit {
  /**
   * 方向
   */
  @Input() uDirection: UFlexDirections | UFlexDirectionConstants = UFlexDirections.row;

  /**
   * 横向排列
   */
  @Input() uAlignmentHorizontal: UFlexAlignmentHorizontals | UFlexAlignmentHorizontalConstants = UFlexAlignmentHorizontals.start;

  /**
   * 竖向排列
   */
  @Input() uAlignmentVertical: UFlexAlignmentVerticals | UFlexAlignmentVerticalConstants = UFlexAlignmentVerticals.stretch;

  // #region gap

  private gap = 0;
  /**
   * 间距
   */
  @Input() set uGap(v: number) {
    this.gap = v;
    if (v) {
      // 重新计算子gap
      for (let i = 0; i < this.selfElement.children.length; i++) {
        const c: HTMLElement = this.selfElement.children.item(i) as HTMLElement;
        c.style.padding = (v / 2).toString() + 'px';
        if (c.children.length > 0) {
          const cc = c.children[0] as HTMLElement;
          cc.style.boxSizing = 'border-box';
          cc.style.height = '100%';
          cc.style.width = '100%';
        }
      }
    }
  }
  /**
   * 间距
   */
  get uGap(): number {
    return this.gap;
  }

  // #endregion gap

  @HostBinding('class.u-flex-container')
  get classFlexContainer(): boolean {
    return true;
  }

  @HostBinding('class.u-flex-row')
  get classFlexRow(): boolean {
    return this.uDirection === UFlexDirections.row || this.uDirection === UFlexDirections.rowReverse;
  }

  @HostBinding('class.u-flex-column')
  get classFlexColumn(): boolean {
    return this.uDirection === UFlexDirections.column || this.uDirection === UFlexDirections.columnReverse;
  }

  @HostBinding('style.flex-direction')
  get styleFlexDirection(): UFlexDirections | UFlexDirectionConstants {
    return this.uDirection;
  }

  @HostBinding('style.justify-content')
  get styleAignmentHorizontal(): UFlexAlignmentHorizontals | UFlexAlignmentHorizontalConstants {
    return this.uAlignmentHorizontal;
  }

  @HostBinding('style.align-items')
  get styleAignmentVertical(): UFlexAlignmentVerticals | UFlexAlignmentVerticalConstants {
    return this.uAlignmentVertical;
  }

  private selfElement: HTMLElement;

  constructor(private element: ElementRef) {
    this.selfElement = this.element.nativeElement;
  }

  ngAfterContentInit(): void {
    this.uGap = this.gap;
  }
}
