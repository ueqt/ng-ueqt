import { UButtonModule } from './../button/button.module';
import { UInputModule } from './../input/input.module';
import { UOutletModule } from '../core/outlet/outlet.module';
import { FormsModule } from '@angular/forms';
import { UViewerComponent } from './viewer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

const components = [
  UViewerComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    UOutletModule,
    UInputModule,
    UButtonModule
  ],
  exports: [...components],
  declarations: [...components]
})
export class UViewerModule { }
