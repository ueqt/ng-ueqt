import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UFlexComponent } from './flex.component';
import { UFlexDirective } from './flex.directive';

const components = [
  UFlexComponent,
  UFlexDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [...components],
  declarations: [...components]
})
export class UFlexModule { }
