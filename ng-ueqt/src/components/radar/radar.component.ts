import { NgClass, NgFor } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

export class URadarModel {
  /**
   * 列名
   */
  captions: string[] = [];

  /**
   * 最大值
   */
  max: number[] = [];

  /**
   * 所有的数据集
   */
  datas: number[][] = [];

  /**
   * 所有颜色
   */
  colors: string[] = [];
  /**
   * 圆有几层
   */
  numberOfScales = 4;
  /**
   * 字体大小
   */
  fontSize = 10;

  /**
   * 图表大小
   */
  size = 450;
}

@Component({
  selector: 'u-radar',
  exportAs: 'uRadar',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<svg version="1" xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size"
  [attr.viewBox]="'-50 -50 ' + (size + 100) + ' ' + (size + 100)" (mouseleave)="setSelected(-1, -1)">
  <g [attr.transform]="'translate(' + middleOfChart + ',' + middleOfChart + ')'">
    <!-- 底层同心圆 -->
    <g key="scales">
      <g *ngFor="let scale of scales">
        <circle class="u-radar-scale" [attr.key]="'scale-' + (scale + 1)" [attr.cx]="scale + 1" [attr.cy]="scale + 1"
          [attr.r]="(scale + 1) / uOptions.numberOfScales * size / 2"
          [style.fill-opacity]="(scale + 1)/uOptions.numberOfScales" stroke="#999" strokeWidth="0.2" />
      </g>
    </g>
    <!-- 三根轴 -->
    <g key="group-axes">
      <polyline class="u-radar-axis" *ngFor="let col of columns;index as i;" [attr.key]="'axis-' + (i + 1)"
        [attr.points]="getAxis(col)" />
    </g>
    <!-- 实际图形 -->
    <g key="groups">
      <path class="u-radar-shape" *ngFor="let data of uOptions.datas;index as i;" [attr.key]="'shape-' + (i + 1)"
        [attr.d]="getDataPath(data)" [attr.stroke]="getColor(i)" [attr.fill]="getColor(i)" fillOpacity=".5" />
    </g>
    <!-- 类别字 -->
    <!-- [attr.dy]="10" -->
    <g key="group-cations">
      <text class="u-radar-caption" *ngFor="let col of columns" [attr.key]="'caption-of-' + col.key"
        [attr.x]="polarToX(col.angle, (size / 2)*1).toFixed(4)" [attr.y]="polarToY(col.angle, (size / 2)*1).toFixed(4)"
        fill="#444" fontWeight="400" textShadow="1px 1px 0 #fff">
        {{ col.key }}
      </text>
    </g>
    <!-- 圆点 -->
    <g key="dots">
      <ng-container *ngFor="let data of uOptions.datas;index as i;">
        <ng-container *ngFor="let col of columns;index as j;">
          <circle class="u-radar-dot" [attr.key]="'dot-' + col.key + '-' + data[col.index]"
            [attr.cx]="polarToX(col.angle, (data[col.index] / uOptions.max[col.index] * size) / 2)"
            [attr.cy]="polarToY(col.angle, (data[col.index] / uOptions.max[col.index] * size) / 2)"
            (mouseenter)="setSelected(i, j)" (mouseleave)="setSelected(-1, -1)" />
        </ng-container>
      </ng-container>
    </g>
    <!-- 圆点字 -->
    <g key="group-cations">
      <!--            dx="5" [attr.x]="polarToX(col.angle, (data[col.index] / uOptions.max[col.index] * size) / 2)"
        [attr.y]="polarToY(col.angle, (data[col.index] / uOptions.max[col.index] * size) / 2)" -->
      <ng-container *ngFor="let data of uOptions.datas;index as i;">
        <text class="u-radar-value" *ngFor="let col of columns;index as j;"
          [ngClass]="{'u-radar-value-selected': selected.dataIndex === i && selected.colIndex === j}"
          [attr.key]="'value-' + col.key + '-' + data[col.index]"
          [attr.x]="polarToX(col.angle, (size / 2)*(1+0.08*(i+1))).toFixed(4)"
          [attr.y]="polarToY(col.angle, (size / 2)*(1+0.08*(i+1))).toFixed(4)" [attr.fill]="getColor(i)"
          fontWeight="400" textShadow="1px 1px 0 #fff">
          {{ data[col.index] }}
        </text>
      </ng-container>
    </g>
  </g>
</svg>
  `
})
export class URadarComponent {
  // http://www.bingshangroup.com/blog2/action1/%E4%BD%A0%E7%9F%A5%E9%81%93%E4%B9%9F%E5%AD%A6%E4%B8%8D%E4%BC%9A%E7%9A%84CSS/drawingList.html

  // https://gitee.com/uCharts/uCharts

  // https://itnext.io/react-svg-radar-chart-a89d15760e8

  /**
   * 内容
   */
  @Input() uOptions: URadarModel = new URadarModel();

  selected: { dataIndex: number, colIndex: number } = {
    dataIndex: -1,
    colIndex: -1
  };

  get size(): number {
    return this.uOptions.size;
  }

  /**
   * 圆的key，倒排序，否则最大的圆会覆盖其他圆
   * [3,2,1,0]
   */
  get scales(): number[] {
    return [...Array(this.uOptions.numberOfScales).keys()].reverse();
  }

  get middleOfChart(): string {
    return (this.size / 2).toFixed(4);
  }

  get columns(): { key: string, index: number, angle: number }[] {
    return this.uOptions.captions.map((value: string, index: number, array: string[]) => {
      const result = {
        key: value,
        index,
        angle: (Math.PI * 2 * index) / array.length
      };
      return result;
    });
  }

  setSelected(dataIndex: number, colIndex: number): void {
    this.selected.dataIndex = dataIndex;
    this.selected.colIndex = colIndex;
  }

  getDataPath(data: number[]): string {
    return this.pathDefinition(this.columns.map(col => {
      const value = data[col.index] / this.uOptions.max[col.index];
      return [
        this.polarToX(col.angle, (value * this.size) / 2),
        this.polarToY(col.angle, (value * this.size) / 2)
      ];
    }));
  }

  polarToX(angle: number, distance: number): number {
    return Math.cos(angle - Math.PI / 2) * distance;
  }

  polarToY(angle: number, distance: number): number {
    return Math.sin(angle - Math.PI / 2) * distance;
  }

  getAxis(col: { key: string, index: number, angle: number }): string {
    const result = this.points([
      [0, 0],
      [
        this.polarToX(col.angle, this.size / 2),
        this.polarToY(col.angle, this.size / 2)
      ]
    ]);
    return result;
  }

  getColor(index: number): string {
    if (this.uOptions.colors.length <= index) {
      return '#edc951';
    }
    return this.uOptions.colors[index];
  }

  private pathDefinition(points: number[][]): string {
    let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
      d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
    }
    return d + 'z';
  }

  private points(points: number[][]): string {
    return points.map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
      .join(' ');
  }
}
