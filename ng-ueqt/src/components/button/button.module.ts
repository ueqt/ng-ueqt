import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UButtonComponent } from './button.component';
import { UButtonGroupComponent } from './button-group.component';

const components = [
  UButtonComponent,
  UButtonGroupComponent
];

@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components]
})
export class UButtonModule { }
