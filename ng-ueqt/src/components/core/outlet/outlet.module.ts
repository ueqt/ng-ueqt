import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UStringTemplateOutletDirective } from './string_template_outlet.directive';

@NgModule({
  imports: [CommonModule],
  exports: [UStringTemplateOutletDirective],
  declarations: [UStringTemplateOutletDirective]
})
export class UOutletModule { }
