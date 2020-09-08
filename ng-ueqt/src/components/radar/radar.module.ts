import { URadarComponent } from './radar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const directives = [
  URadarComponent
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class URadarModule { }
