import { FormsModule } from '@angular/forms';
import { UInputComponent } from './input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  UInputComponent
];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [...components],
  declarations: [...components]
})
export class UInputModule { }
