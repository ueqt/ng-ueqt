import { UAny } from './../core/util/types';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

export class URadarModel {
  /**
   * 列名
   */
  captions: string[] = [];

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <svg version="1" xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size" [attr.height]="size"
    [attr.viewBox]="'0 0 ' + (size + 20) + ' ' + (size + 20)">
    <g [attr.transform]="'translate(' + middleOfChart + ',' + middleOfChart + ')'">
      <!-- 底层同心圆 -->
      <g key="scales">
        <g *ngFor="let scale of scales" >
          <circle class="u-radar-scale" [attr.key]="'scale-' + (scale + 1)"
            [attr.cx]="scale + 1"
            [attr.cy]="scale + 1"
            [attr.r]="(scale + 1) / options.numberOfScales * size / 2"
            fill="#FAFAFA" stroke="#999" strokeWidth="0.2" />
        </g>
      </g>
      <!-- 三根轴 -->
      <g key="group-axes">
        <polyline class="u-radar-axis" *ngFor="let col of columns;index as i;"
          [attr.key]="'axis-' + (i + 1)"
          [attr.points]="getAxis(col)"
          />
      </g>
      <!-- 实际图形 -->
      <g key="groups">
        <path class="u-radar-shape" *ngFor="let data of options.datas;index as i;"
          [attr.key]="'shape-' + (i + 1)"
          [attr.d]="getDataPath(data)"
          [attr.stroke]="getColor(i)"
          [attr.fill]="getColor(i)"
          fillOpacity=".5"
          />
      </g>
      <!-- 类别字 -->
      <g key="group-cations">
        <text class="u-radar-caption" *ngFor="let col of columns"
          [attr.key]="'caption-of-' + col.key"
          [attr.x]="polarToX(col.angle, (size / 2)*0.95).toFixed(4)"
          [attr.y]="polarToY(col.angle, (size / 2)*0.95).toFixed(4)"
          [attr.dy]="options.fontSize / 2"
          fill="#444"
          fontWeight="400"
          textShadow="1px 1px 0 #fff">
            {{ col.key }}
        </text>
      </g>
      <!-- 圆点 -->
      <g key="dots">
        <ng-container *ngFor="let data of options.datas">
          <circle class="u-radar-dot" *ngFor="let col of columns"
            [attr.key]="'dot-' + col.key + '-' + data[col.index]"
            [attr.cx]="polarToX(col.angle, (data[col.index] * size) / 2)"
            [attr.cy]="polarToY(col.angle, (data[col.index] * size) / 2)"
            />
        </ng-container>
      </g>
    </g>
  </svg>
  `,
})
export class URadarComponent {
  // http://www.bingshangroup.com/blog2/action1/%E4%BD%A0%E7%9F%A5%E9%81%93%E4%B9%9F%E5%AD%A6%E4%B8%8D%E4%BC%9A%E7%9A%84CSS/drawingList.html

  // https://gitee.com/uCharts/uCharts

  // https://itnext.io/react-svg-radar-chart-a89d15760e8

  @Input() options: URadarModel = new URadarModel();

  get size(): number {
    return this.options.size;
  }

  /**
   * 圆的key，倒排序，否则最大的圆会覆盖其他圆
   * [3,2,1,0]
   */
  get scales(): number[] {
    return [...Array(this.options.numberOfScales).keys()].reverse();
  }

  get middleOfChart(): string {
    return (this.size / 2).toFixed(4);
  }

  get columns(): { key: string, index: number, angle: number }[] {
    return this.options.captions.map((value: string, index: number, array: string[]) => {
      return {
        key: value,
        index,
        angle: (Math.PI * 2 * index) / array.length
      };
    });
  }

  getDataPath(data: number[]): string {
    return this.pathDefinition(this.columns.map(col => {
      const value = data[col.index];
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

  private pathDefinition(points: number[][]): string {
    let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
      d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
    }
    return d + 'z';
  }

  getAxis(col: { key: string, index: number, angle: number }): string {
    return this.points([
      [0, 0],
      [
        this.polarToX(col.angle, this.size / 2),
        this.polarToY(col.angle, this.size / 2)
      ]
    ]);
  }

  private points(points: number[][]): string {
    return points.map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
      .join(' ');
  }

  getColor(index: number): string {
    if (this.options.colors.length <= index) {
      return '#edc951';
    }
    return this.options.colors[index];
  }
}
