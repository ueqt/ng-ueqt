import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemo-input-basic',
  template: `
  {{ text }}
  <u-input uLabel="text" [uMaxLength]="5" [(ngModel)]="text"></u-input>
  <u-input uLabel="date" uType="date"></u-input>
  <u-input uLabel="datetime" uType="datetime-local"></u-input>
  <u-input uLabel="month" uType="month"></u-input>
  <u-input uLabel="week" uType="week"></u-input>
  <u-input uLabel="time" uType="time"></u-input>
  <u-input uLabel="url" uType="url"></u-input>
  <u-input uLabel="email" uType="email"></u-input>
  <u-input uLabel="tel" uType="tel"></u-input>
  <u-input uLabel="number" uType="number"></u-input>
  <u-input uLabel="password" uType="password"></u-input>
  <u-input uLabel="search" uType="search"></u-input>
  <u-input uType="textarea" uLabel="textarea"></u-input>
  <u-input uType="select" uLabel="select" [uOptions]="options" [(ngModel)]="selectedValue" (ngModelChange)="selected($event)"></u-input>
`,
})
export class UdemoInputBasicComponent implements OnInit {

  text: string;

  selectedValue: any;

  options = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.options = [
        { label: 'a', value: '1' },
        { label: 'b', value: '2' },
      ];
    }, 1000);
  }

  selected(event): void {
    console.log(event);
    console.log(this.selectedValue);
  }
}
