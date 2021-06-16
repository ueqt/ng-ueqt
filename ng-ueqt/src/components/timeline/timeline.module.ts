import { UButtonModule } from './../button/button.module';
import { UInputModule } from './../input/input.module';
import { UOutletModule } from '../core/outlet/outlet.module';
import { FormsModule } from '@angular/forms';
import { UTimelineComponent } from './timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UTimelineBreakComponent } from './timeline-break.component';
import { UTimelineItemComponent } from './timeline-item.component';
import { UTimelineLineComponent } from './timeline-line.component';

const components = [
  UTimelineBreakComponent,
  UTimelineItemComponent,
  UTimelineLineComponent,
  UTimelineComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UOutletModule,
    UButtonModule
  ],
  exports: [...components],
  declarations: [...components]
})
export class UTimelineModule { }
