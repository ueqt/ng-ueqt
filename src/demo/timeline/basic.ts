import { Component } from '@angular/core';

@Component({
  selector: 'udemo-timeline-basic',
  template: `
  <u-timeline>
    <u-timeline-break uContent="史前"></u-timeline-break>
    <u-timeline-item uContent="大怪兽时代"></u-timeline-item>
    <u-timeline-break *ngFor="let year of years" [uContent]="yearTmpl" [uContentArgs]="year"></u-timeline-break>
    <u-timeline-item *ngFor="let year of years" [uContent]="yearItemTmpl" [uContentArgs]="year"></u-timeline-item>
  </u-timeline>
  <ng-template #yearTmpl let-data>{{data}}</ng-template>
  <ng-template #yearItemTmpl let-data>{{data}}时代</ng-template>
`
})
export class UdemoTimelineBasicComponent {
  years = [1990, 2000, 2010, 2020];
}
