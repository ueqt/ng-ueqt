import { UAny } from '../core/util/types';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { doesNotThrow } from 'assert';
import { ThrowStmt } from '@angular/compiler';

export class UContributionsModel {
  /**
   * 年份
   */
  year: number;
  /**
   * 数据
   */
  datas: { [day: string]: number };
  /**
   * 热力
   */
  pieces: { min: number, max: number, color: string }[] = [];
}

@Component({
  selector: 'u-contributions',
  exportAs: 'uContributions',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <input type="checkbox" id="Embiggen"> <label for="Embiggen">Make bigger</label><br>
  <div role="region">
    <table>
      <tr>
        <th></th>
        <th *ngFor="let month of ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];index as i;"
          [attr.colspan]="monthWeeks[i]">{{month}}月</th>
      </tr>
      <tr *ngFor="let week of ['日', '一', '二', '三', '四', '五', '六'];index as y;">
        <th>{{ week }}</th>
        <ng-container *ngFor="let nWeek of weekArray;index as x;">
          <td [ngClass]="values[y*this.weekNumber+x].class">
            <a *ngIf="values[y*this.weekNumber+x].date.getFullYear() === options.year && values[y*this.weekNumber+x].value !== 0"
              [ngStyle]="{'background-color': values[y*this.weekNumber+x].color}"
              [uTooltip]="valueTip"></a>
            <span *ngIf="values[y*this.weekNumber+x].date.getFullYear() === options.year && values[y*this.weekNumber+x].value === 0"></span>
            <ng-template #valueTip>
            <div>{{ values[y*this.weekNumber+x].date.toLocaleDateString()}}</div>
            <div style="color: yellow;">{{ values[y*this.weekNumber+x].value }}</div>
            </ng-template>
          </td>
        </ng-container>
      </tr>
    </table>
  </div>
  `,
})
export class UContributionsComponent implements OnInit {
  // https://adrianroselli.com/2018/02/github-contributions-chart.html

  @Input() options: UContributionsModel = new UContributionsModel();

  /**
   * 一年有几周(x数量)
   */
  weekNumber = 0;
  /**
   * 每个月有几周
   */
  monthWeeks: number[] = [];
  weekArray: number[] = [];
  values: { date: Date, value: number, color: string, class: string }[] = [];

  // (24*60*60*1000)
  private PROXIMATE_ONE_DAY = 86400000;

  constructor() {
  }

  ngOnInit(): void {
    this.weekNumber = this.calcWeekNumber();
    for (let i = 0; i < this.weekNumber; i++) {
      this.weekArray.push(i);
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < this.weekNumber; j++) {
        const value = this.getValue(j, i);
        this.values.push(value);
      }
    }
    let totalWeek = 0;
    for (let i = 1; i < 12; i++) {
      // 从2月找到11月，找每月的第一天的x-1作为上一个月length
      const first = new Date(this.options.year, i, 1);
      const point = this.dateToPoint(first);
      const thisWeek = point.x - totalWeek;
      this.monthWeeks.push(thisWeek);
      totalWeek += thisWeek;
    }
    // 计算12月，用总数减掉total
    this.monthWeeks.push(this.weekNumber - totalWeek);
  }

  calcWeekNumber(): number {
    const start = new Date(this.options.year, 0, 1);
    const end = new Date(this.options.year, 11, 31);
    const allDay = Math.floor(end.getTime() / this.PROXIMATE_ONE_DAY)
      - Math.floor(start.getTime() / this.PROXIMATE_ONE_DAY) + 1;

    const nthWeek = Math.floor((allDay + start.getDay() + 6) / 7);
    return nthWeek;
  }

  getValue(x: number, y: number): {
    date: Date,
    value: number,
    color: string,
    class: string
  } {
    const date = this.pointToDate({ x, y });
    let dateString = '';
    const month = date.getMonth() + 1;
    if (month < 10) {
      dateString = '0' + month;
    } else {
      dateString = month.toString();
    }
    const day = date.getDate();
    if (day < 10) {
      dateString += '-0' + day;
    } else {
      dateString += '-' + day;
    }
    let value = 0;
    if (this.options.datas[dateString]) {
      value = this.options.datas[dateString];
    }
    let mclass = date.getFullYear() === this.options.year ? 'year' : '';
    // 判断是不是一个月的第一周，第一周加.left
    const weekOfMonth = this.weekOfMonth(date);
    const weekStartDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const yearEndDay = new Date(date.getFullYear(), 11, 31).getDay();
    if (weekOfMonth === 1) {
      mclass += ' left';
    }
    // 一个月的第二周且比1日早加.left
    if (weekOfMonth === 2 && date.getDay() < weekStartDay) {
      mclass += ' left';
    }
    // 一个月的第一天和周日加.top
    if (date.getDate() === 1) {
      mclass += ' top';
    } else if (date.getDay() === 0) {
      mclass += ' top';
    }
    // 周六加.bottom
    if (date.getDay() === 6) {
      mclass += ' bottom';
    } else if (date.getMonth() === 11 && date.getDate() === 31) {
      // 12月31日加.bottom
      mclass += ' bottom';
    }
    // 12月最后一周加.right
    if (this.dateToPoint(date).x === this.weekNumber - 1) {
      mclass += ' right';
    }
    // 12月倒数第二周比最后一天晚加.right
    if (this.dateToPoint(date).x === this.weekNumber - 2
      && date.getDay() > yearEndDay) {
      mclass += ' right';
    }
    let color = '';
    for (const piece of this.options.pieces) {
      if (value > piece.min && value <= piece.max) {
        color = piece.color;
        mclass += ' has-color';
        break;
      }
    }
    return {
      date,
      value,
      color,
      class: mclass
    };
  }

  /**
   * 一个月的第几周
   * @param date 日期
   */
  weekOfMonth(date: Date): number {
    // 取得当月的第一天
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    return (Math.floor((date.getDate() - 1 + start.getDay()) / 7) + 1);
  }

  /**
   * 日期转坐标
   * @param date 日期
   */
  dateToPoint(date: Date): { x: number, y: number } {
    const week = date.getDay();

    const start = new Date(date.getFullYear(), 0, 1);

    const allDay = Math.floor(date.getTime() / this.PROXIMATE_ONE_DAY)
      - Math.floor(start.getTime() / this.PROXIMATE_ONE_DAY) + 1;

    const nthWeek = Math.floor((allDay + start.getDay() + 6) / 7) - 1;
    return {
      x: nthWeek,
      y: week
    };
  }

  /**
   * Convert a (x, y) point to time date
   * @param  point point
   * @return date
   */
  pointToDate(point: { x: number, y: number }): Date {
    const start = new Date(this.options.year, 0, 1);
    const nthDay = point.x * 7 - start.getDay() + point.y;
    const date = new Date(start.getTime());
    date.setDate(start.getDate() + nthDay);
    return date;
  }

}
