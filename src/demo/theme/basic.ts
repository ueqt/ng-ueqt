import { UThemeService } from './../../../ng-ueqt/src/components/theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { UButtonComponent } from 'ng-ueqt';
import { NgFor } from '@angular/common';

@Component({
  selector: 'udemo-theme-basic',
  standalone: true,
  imports: [
    NgFor,
    UButtonComponent,
  ],
  template: `
<u-button (click)="change()">修改皮肤</u-button>
<div>
  <div *ngFor="let t of theme.colorNames"
    style="border: solid 1px black;display: inline-block;margin-right: 10px; padding: 5px;"
    [style.color]="'var('+ t + ')'">{{t}}</div>
</div>
`
})
export class UdemoThemeBasicComponent {
  constructor(public theme: UThemeService) {
    this.theme.themes = {
      default: ['#f0f2f5', '#000000', '#1890ff', '#ff0000', '#001520'],
      pink: ['#f2eeff', '#cca7c8', '#d890a8', '#b46988', '#685f04'],
    };
  }

  change(): void {
    if (this.theme.currentTheme === 'default') {
      this.theme.change('pink');
    } else {
      this.theme.change('default');
    }
  }
}
