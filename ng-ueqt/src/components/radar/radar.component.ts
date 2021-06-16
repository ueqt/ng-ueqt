import { UAny } from './../core/util/types';
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radar.component.html'
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
      return {
        key: value,
        index,
        angle: (Math.PI * 2 * index) / array.length
      };
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
    if (this.uOptions.colors.length <= index) {
      return '#edc951';
    }
    return this.uOptions.colors[index];
  }
}
