import { Component } from '@angular/core';
import { UFlexAlignmentHorizontals, UFlexAlignmentVerticals, UFlexDirections } from 'ng-ueqt';

@Component({
  selector: 'udemo-flex-basic',
  template: `
  <u-flex uDirection="row" uAlignmentHorizontal="space-around">
    <u-input uType="select" uLabel="方向" [uOptions]="flexDirections" [(ngModel)]="direction"></u-input>
    <u-input uType="select" uLabel="横向排列" [uOptions]="flexAlignmentHorizontals" [(ngModel)]="alignmentHorizontal"></u-input>
    <u-input uType="select" uLabel="纵向排列" [uOptions]="flexAlignmentVerticals" [(ngModel)]="alignmentVertical"></u-input>
  </u-flex>
  <hr/>
  <div style="width: 100%; height: 500px; border: 1px solid gray;">
    <u-flex [uDirection]="direction.value" [uAlignmentHorizontal]="alignmentHorizontal.value" [uAlignmentVertical]="alignmentVertical.value">
      <div class="blocks one">1</div>
      <div class="blocks two">2</div>
      <div class="blocks three">3</div>
      <div class="blocks four">4</div>
      <div class="blocks five">5</div>
    </u-flex>
  </div>

  <hr />

  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">
    <u-flex [uDirection]="fillDirection" uAlignmentVertical="stretch">
      <div uFlex="20" class="blocks one">uFlex="20"</div>
      <div uFlex="80" class="blocks two">uFlex="80"</div>
    </u-flex>
  </div>

  <hr />

  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">
    <u-flex [uDirection]="fillDirection" uAlignmentVertical="stretch">
      <div uFlex="20" class="blocks one">uFlex="20"</div>
      <div uFlex="60" class="blocks two">uFlex="60"</div>
      <div uFlex="auto" class="blocks three">uFlex="auto"</div>
    </u-flex>
  </div>

  <hr />

  <div style="width: 100%; height: 200px; border: 1px solid gray;" (click)="changeDirection()">
    <u-flex [uDirection]="fillDirection" uAlignmentVertical="stretch" uGap="10">
      <div uFlex="20"><div class="blocks one">uFlex="20"</div></div>
      <div uFlex="60"><div class="blocks two">uFlex="60"</div></div>
      <div uFlex="120px"><div class="blocks three">uFlex="120px"</div></div>
    </u-flex>
  </div>
`,
  styles: [
    `
  .blocks {
    min-width: 75px;
    min-height: 50px;
    border-radius: 3px;
    padding: 8px;
    box-shadow: 0 2px 5px 0 rgb(52 47 51 / 63%);
    opacity: .9;
    color: #fff;
    text-align: center;
  }

  .one {
    background-color: #009688;
  }

  .two {
    background-color: #3949ab;
    min-height: 100px;
  }

  .three {
    background-color: #9c27b0;
  }

  .four {
    background-color: #b08752;
    min-height: 75px;
  }

  .five {
    background-color: #5ca6b0;
  }
`
  ]
})
export class UdemoFlexBasicComponent {
  flexDirections = Object.keys(UFlexDirections).map(key => ({ label: key, value: UFlexDirections[key] }));
  flexAlignmentHorizontals = Object.keys(UFlexAlignmentHorizontals).map(key => ({ label: key, value: UFlexAlignmentHorizontals[key] }));
  flexAlignmentVerticals = Object.keys(UFlexAlignmentVerticals).map(key => ({ label: key, value: UFlexAlignmentVerticals[key] }));
  direction: any = this.flexDirections[0];
  alignmentHorizontal: any = this.flexAlignmentHorizontals[0];
  alignmentVertical: any = this.flexAlignmentVerticals[0];

  fillDirection = UFlexDirections.row;

  changeDirection(): void {
    if (this.fillDirection === UFlexDirections.row) {
      this.fillDirection = UFlexDirections.column;
    } else {
      this.fillDirection = UFlexDirections.row;
    }
  }
}
