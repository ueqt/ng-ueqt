import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  ContentChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UButtonComponent } from '../button';
import { UInputComponent } from '../input';

/**
 * 视图排序模型
 */
export class UViewerOrderColumnModel {
  /**
   * 索引号
   */
  index: number;
  /**
   * 字段名
   */
  name: string;
  /**
   * 是否升序
   */
  isAsc = true;
}

/**
 * 视图过滤模型
 */
export class UViewerFilterColumnModel {
  /**
   * 索引号
   */
  index: number;
  /**
   * 字段名
   */
  name: string;
  /**
   * 条件
   */
  condition: string;
  /**
   * 值
   */
  value: string;
}

/**
 * 视图列定义
 */
export class UViewerColumnDef {
  /**
   * 额外字段
   */
  [key: string]: any;

  /**
   * 索引号（自动生成）
   */
  index?: number;
  /**
   * 列id
   */
  id: string;
  /**
   * 显示名
   */
  name: string;
  /**
   * 禁用排序
   */
  disableSort?: boolean;
  /**
   * 禁用过滤
   */
  disableFilter?: boolean;

  /**
   * 字段类型
   */
  type?: 'number' | 'string' | string = 'string';
}

@Component({
  selector: 'u-viewer',
  exportAs: 'uViewer',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgTemplateOutlet,
    FormsModule,
    ScrollingModule,
    UButtonComponent,
    UInputComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="u-viewer">
    <div class="u-viewer-sort">
        记录数: {{showDatas.length}}
        <span>排序:</span>
        <u-button *ngFor="let c of orderColumns" [uClick]="changeOrder" [uClickArgs]="c">
            {{ c.name }} {{ c.isAsc ? '↑' : '↓'}}
        </u-button>
        <u-input *ngIf="orderColumnOptionIndexes.length > 0
          && (uMaxOrderNumber === 0 || orderColumns.length < uMaxOrderNumber)"
          uType="select" style="display: inline-block;margin-bottom: 0px;" (change)="selectedOrder($event)">
            <option></option>
            <option *ngFor="let c of orderColumnOptionIndexes" [value]="c">{{ uColumnDefs[c].name }}</option>
        </u-input>
        <span>过滤:</span>
        <u-button *ngFor="let c of filterColumns" [uClick]="changeFilter" [uClickArgs]="c">
            {{ c.name }} {{ c.condition }} {{ c.value }}
        </u-button>
        <div *ngIf="uMaxFilterNumber === 0 || filterColumns.length < uMaxFilterNumber" style="display: inline-block;">
            <u-input uType="select" style="display: inline-block;margin-bottom: 0px;" [(ngModel)]="filterIndex">
                <option></option>
                <option *ngFor="let c of filterColumnOptionIndexes" [value]="c">{{ uColumnDefs[c].name }}</option>
            </u-input>
            <u-input uType="select" style="display: inline-block;margin-bottom: 0px;" [(ngModel)]="filterCondition">
                <option></option>
                <option *ngFor="let c of conditionOptions" [value]="c">{{ c }}</option>
            </u-input>
            <u-input style="display: inline-block;margin-bottom: 0px;" uLabel="值" [(ngModel)]="filterValue"></u-input>
            <u-button [uClick]="addFilter">+</u-button>
        </div>
    </div>
    <hr />
    <div class="u-viewer-table-container" [style.height]="uTableHeight">
        <cdk-virtual-scroll-viewport class="u-viewer-table-scroll-container"
          [itemSize]="itemSize" [minBufferPx]="uItemHeight * 5" [maxBufferPx]="uItemHeight * 10">
            <ng-container *cdkVirtualFor="let data of showDatas">
                <div [style.width]="uItemWidth ? (uItemWidth + 'px') : '100%'" [style.height]="uItemHeight + 'px'">
                    <ng-container *ngTemplateOutlet="uDataTemplate;
                      context: { $implicit: data, orderColumns: orderColumns, filterColumns: filterColumns }">
                    </ng-container>
                </div>
            </ng-container>
        </cdk-virtual-scroll-viewport>
    </div>
</div>
  `
})
export class UViewerComponent implements AfterViewInit {

  /**
   * 显示的模板
   */
  @Input() uDataTemplate: TemplateRef<any>;

  /**
   * 表格高度
   */
  @Input() uTableHeight: string;

  /**
   * 最大可排序数量
   */
  @Input() uMaxOrderNumber = 0;

  /**
   * 最大可过滤数量
   */
  @Input() uMaxFilterNumber = 0;

  // #region uItemHeight

  /**
   * 单个元素高度(Viewer只支持固定行高)
   */
  get uItemHeight(): number {
    return this.itemHeight;
  }
  /**
   * 单个元素高度(Viewer只支持固定行高)
   */
  @Input() set uItemHeight(v: number) {
    this.itemHeight = v;
    this.calcItemSize();
  }

  // #endregion uItemHeight

  // #region uItemWidth

  /**
   * 单个元素宽度(Viewer只支持固定宽度, 0表示100%)
   */
  get uItemWidth(): number {
    return this.itemWidth;
  }
  /**
   * 单个元素宽度(Viewer只支持固定宽度, 0表示100%)
   */
  @Input() set uItemWidth(v: number) {
    this.itemWidth = v;
    this.calcItemSize();
  }

  // #endregion uItemWidth

  // #region uDatas

  /**
   * 要显示的数据数组
   */
  get uDatas(): any[] {
    return this.datas;
  }

  /**
   * 要显示的数据数组
   */
  @Input() set uDatas(v: any[]) {
    this.datas = v;
    this.refresh();
  }

  // #endregion uDatas

  // #region uColumnDefs

  /**
   * 列定义
   */
  get uColumnDefs(): UViewerColumnDef[] {
    return this.columnDefs;
  }

  /**
   * 列定义
   */
  @Input() set uColumnDefs(v: UViewerColumnDef[]) {
    this.orderColumns = [];
    this.orderColumnOptionIndexes = [];
    this.filterColumns = [];
    this.filterColumnOptionIndexes = [];
    for (let i = 0; i < v.length; i++) {
      v[i].index = i;
      if (v[i].disableSort) {
        continue;
      }
      this.orderColumnOptionIndexes.push(i);
    }
    for (let i = 0; i < v.length; i++) {
      v[i].index = i;
      if (v[i].disableFilter) {
        continue;
      }
      this.filterColumnOptionIndexes.push(i);
    }
    this.columnDefs = v;
  }

  // #endregion uColumnDefs

  itemSize = 114;

  /**
   * 显示的数据
   */
  showDatas: any[] = [];

  /**
   * 实际排序列
   */
  orderColumns: UViewerOrderColumnModel[] = [];

  /**
   * 实际过滤列
   */
  filterColumns: UViewerFilterColumnModel[] = [];

  /**
   * 可选的排序列索引号
   */
  orderColumnOptionIndexes: number[] = [];

  /**
   * 可选的过滤列索引号
   */
  filterColumnOptionIndexes: number[] = [];

  conditionFunctions = { // search method base on conditions list value
    大于: (value, filterdValue) => value > filterdValue,
    小于: (value, filterdValue) => value < filterdValue,
    等于: (value, filterdValue) => value === filterdValue,
    不等于: (value, filterdValue) => value !== filterdValue,
    包含: (value, filterdValue) => value.toString().includes(filterdValue),
    不包含: (value, filterdValue) => !value.toString().includes(filterdValue)
  };

  conditionOptions = Object.keys(this.conditionFunctions);

  filterIndex = '';
  filterCondition = '';
  filterValue = '';

  private datas: any[] = [];
  private itemHeight = 114;
  private itemWidth = 0;
  private columnDefs: UViewerColumnDef[] = [];

  constructor(
    private element: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.calcItemSize();
    // @ts-ignore
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.calcItemSize();
      });
    });
    const n: HTMLDivElement = this.element.nativeElement;
    const nc: HTMLDivElement = n.getElementsByClassName('u-viewer-table-container')[0] as HTMLDivElement;
    observer.observe(nc);
  }

  calcItemSize(): void {
    this.itemSize = this.uItemHeight;
    // 为了拿到实际的offsetWidth需要timeout
    setTimeout(() => {
      // 自适应分一行多列
      const n: HTMLDivElement = this.element.nativeElement;
      const nc: HTMLDivElement = n.getElementsByClassName('u-viewer-table-container')[0] as HTMLDivElement;
      const actWidth = nc.offsetWidth;
      let itemNumberOfLine = 1;
      if (this.itemWidth) {
        itemNumberOfLine = Math.floor(actWidth / this.itemWidth);
      }
      this.itemSize = Math.floor(this.uItemHeight / itemNumberOfLine);
      const wr: HTMLElement = nc.childNodes[0].childNodes[0] as HTMLElement;
      wr.style.display = 'grid';
      let c = '';
      for (let i = 0; i < itemNumberOfLine; i++) {
        c += '1fr ';
      }
      wr.style['grid-template-columns'] = c;
    }, 0);
  }

  changeOrder = async (_, c: UViewerOrderColumnModel) => {
    if (c.isAsc) {
      c.isAsc = false;
      // 从orderOptionIds里去除已经选择的项
      const i = this.orderColumnOptionIndexes.findIndex(o => o === c.index);
      if (i >= 0) {
        this.orderColumnOptionIndexes.splice(i, 1);
      }
    } else {
      const ii = this.orderColumns.findIndex(o => o.index === c.index);
      if (ii >= 0) {
        this.orderColumns.splice(ii, 1);
      }
      // 加入orderOptionIds
      this.orderColumnOptionIndexes.push(c.index);
    }
    this.refresh();
  };

  selectedOrder(event): void {
    const key = +event.target.value;
    this.orderColumns.push({
      index: key,
      name: this.uColumnDefs[key].name,
      isAsc: true
    } as UViewerOrderColumnModel);
    // 从orderOptionIds里去除已经选择的项
    const i = this.orderColumnOptionIndexes.findIndex(o => o === key);
    if (i >= 0) {
      this.orderColumnOptionIndexes.splice(i, 1);
    }
    this.refresh();
  }

  /**
   * 重新计算显示的数据
   */
  refresh(): void {
    this.showDatas = [...this.datas];
    for (let j = this.filterColumns.length - 1; j >= 0; j--) {
      const c = this.filterColumns[j];
      const key = this.uColumnDefs[c.index].id;
      for (let i = this.showDatas.length - 1; i >= 0; i--) {
        if (!this.conditionFunctions[c.condition](
          (this.uColumnDefs[c.index].type === 'number' ? +this.showDatas[i][key] : this.showDatas[i][key]),
          (this.uColumnDefs[c.index].type === 'number' ? +c.value : c.value))) {
          this.showDatas.splice(i, 1);
        }
      }
    }
    for (let j = this.orderColumns.length - 1; j >= 0; j--) {
      const c = this.orderColumns[j];
      const key = this.uColumnDefs[c.index].id;
      if (this.uColumnDefs[c.index].type === 'number') {
        this.showDatas.sort((a, b) => {
          if (c.isAsc) {
            if ((+a[key]) > (+b[key])) {
              return 1;
            } else if (a[key] === b[key]) {
              return 0;
            } else {
              return -1;
            }
          } else {
            if ((+a[key]) < (+b[key])) {
              return 1;
            } else if (a[key] === b[key]) {
              return 0;
            } else {
              return -1;
            }
          }
        });
      } else {
        this.showDatas.sort((a, b) => {
          if (c.isAsc) {
            if (a[key] > b[key]) {
              return 1;
            } else if (a[key] === b[key]) {
              return 0;
            } else {
              return -1;
            }
          } else {
            if (a[key] < b[key]) {
              return 1;
            } else if (a[key] === b[key]) {
              return 0;
            } else {
              return -1;
            }
          }
        });
      }
    }
  }

  addFilter = async () => {
    if (this.filterIndex === undefined
      || this.filterIndex === ''
      || !this.filterCondition
      || this.filterValue === undefined
      || this.filterValue === '') {
      return;
    }
    this.filterColumns.push({
      index: +this.filterIndex,
      name: this.uColumnDefs[this.filterIndex].name,
      condition: this.filterCondition,
      value: this.filterValue
    });
    this.refresh();
  };

  changeFilter = async (_, c: UViewerFilterColumnModel) => {
    const ii = this.filterColumns.findIndex(o => o.index === c.index);
    if (ii >= 0) {
      this.filterColumns.splice(ii, 1);
    }
    this.refresh();
  };
}
