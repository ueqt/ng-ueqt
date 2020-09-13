import { UTooltipModule } from './../tooltip/tooltip.module';
import { UContributionsComponent } from './contributions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const directives = [
  UContributionsComponent
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule, UTooltipModule],
})
export class UContributionsModule { }
