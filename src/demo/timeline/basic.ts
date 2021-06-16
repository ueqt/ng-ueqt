import { Component } from '@angular/core';

@Component({
  selector: 'udemo-timeline-basic',
  template: `
  纵向<hr/>
  <u-timeline [uOrientation]="'vertical'">
    <u-timeline-break uContent="史前"></u-timeline-break>
    <u-timeline-item uContent="大怪兽时代" [uBadge]="badgeTmpl" [uBadgeArgs]="'bars'"></u-timeline-item>
    <u-timeline-break *ngFor="let year of years" [uContent]="yearTmpl" [uContentArgs]="year"></u-timeline-break>
    <u-timeline-item *ngFor="let year of years" [uContent]="yearItemTmpl" [uContentArgs]="year" [uBadge]="year" uBadgeBackgroundColor="var(--u-accent)"></u-timeline-item>
  </u-timeline>
  <ng-template #badgeTmpl let-data><i [uIcon]="data" style="color: red;" (click)="onClickItem('大怪兽')"></i></ng-template>
  <ng-template #yearTmpl let-data>{{data}}</ng-template>
  <ng-template #yearItemTmpl let-data>{{data}}时代</ng-template>
  <br/>
  横向<hr/>
  <u-timeline [uOrientation]="'horizontal'">
    <ng-container *ngFor="let step of steps; let i = index;" >
      <u-timeline-line *ngIf="i !== 0"></u-timeline-line>
      <u-timeline-item [uBadge]="stepTmpl" [uBadgeArgs]="step" [uBadgeBackgroundColor]="step === currentStep ? 'red' : 'grey'"></u-timeline-item>
    </ng-container>
  </u-timeline>
  <ng-template #stepTmpl let-data><span (click)="onClickStep(data)">{{data}}</span></ng-template>
  <div>{{currentStep}}</div>
`
})
export class UdemoTimelineBasicComponent {
  years = [1990, 2000, 2010, 2020];

  steps = [1, 2, 3, 4];

  currentStep = 1;

  onClickItem(data: string): void {
    console.log('clicked: ', data);
  }

  onClickStep(step: number): void {
    this.currentStep = step;
  }
}
