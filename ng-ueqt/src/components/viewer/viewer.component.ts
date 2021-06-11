import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, Input,
  TemplateRef,
  ContentChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

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
 * 视图列定义
 */
export class UViewerColumnDef {
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
   * 字段类型
   */
  type?: 'number' | 'string' = 'string';
}

@Component({
  selector: 'u-viewer',
  exportAs: 'uViewer',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './viewer.component.html'
})
export class UViewerComponent implements AfterViewInit {

  // #region itemHeight

  private lItemHeight = 114;
  /**
   * 单个元素高度(Viewer只支持固定行高)
   */
  get itemHeight(): number {
    return this.lItemHeight;
  }
  /**
   * 单个元素高度(Viewer只支持固定行高)
   */
  @Input() set itemHeight(v: number) {
    this.lItemHeight = v;
    this.calcItemSize();
  }

  // #endregion itemHeight

  // #region itemWidth

  private lItemWidth = 0;
  /**
   * 单个元素宽度(Viewer只支持固定宽度, 0表示100%)
   */
  get itemWidth(): number {
    return this.lItemWidth;
  }
  /**
   * 单个元素宽度(Viewer只支持固定宽度, 0表示100%)
   */
  @Input() set itemWidth(v: number) {
    this.lItemWidth = v;
    this.calcItemSize();
  }

  // #endregion itemWidth

  // #region datas

  private lDatas: any[] = [];
  /**
   * 要显示的数据数组
   */
  get datas(): any[] {
    return this.lDatas;
  }

  /**
   * 要显示的数据数组
   */
  @Input() set datas(v: any[]) {
    this.lDatas = v;
    this.refresh();
  }

  // #endregion datas

  // #region columnDefs

  private lColumnDefs: UViewerColumnDef[] = [];
  /**
   * 列定义
   */
  get columnDefs(): UViewerColumnDef[] {
    return this.lColumnDefs;
  }

  /**
   * 列定义
   */
  @Input() set columnDefs(v: UViewerColumnDef[]) {
    this.orderColumns = [];
    this.orderColumnOptionIndexes = [];
    for (let i = 0; i < v.length; i++) {
      v[i].index = i;
      if (v[i].disableSort) {
        continue;
      }
      this.orderColumnOptionIndexes.push(i);
    }
    this.lColumnDefs = v;
  }

  // #endregion columnDefs

  /**
   * 显示的模板
   */
  @Input() dataTemplate: TemplateRef<any>;

  /**
   * 表格高度
   */
  @Input() tableHeight: string;

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
   * 可选的排序列索引号
   */
  orderColumnOptionIndexes: number[] = [];

  constructor(
    private element: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.calcItemSize();
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
    this.itemSize = this.itemHeight;
    // 为了拿到实际的offsetWidth需要timeout
    setTimeout(() => {
      // 自适应分一行多列
      const n: HTMLDivElement = this.element.nativeElement;
      const nc: HTMLDivElement = n.getElementsByClassName('u-viewer-table-container')[0] as HTMLDivElement;
      const actWidth = nc.offsetWidth;
      let itemNumberOfLine = 1;
      if (this.lItemWidth) {
        itemNumberOfLine = Math.floor(actWidth / this.lItemWidth);
      }
      this.itemSize = Math.floor(this.itemHeight / itemNumberOfLine);
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
  }

  selectedOrder(event): void {
    const key = +event.target.value;
    this.orderColumns.push({
      index: key,
      name: this.columnDefs[key].name,
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
    this.showDatas = [...this.lDatas];
    for (let j = this.orderColumns.length - 1; j >= 0; j--) {
      const c = this.orderColumns[j];
      const key = this.columnDefs[c.index].id;
      if (this.columnDefs[c.index].type === 'number') {
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
}
