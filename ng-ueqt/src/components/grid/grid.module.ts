import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UColDirective } from './col.directive';
import { URowDirective } from './row.directive';

@NgModule({
  declarations: [UColDirective, URowDirective],
  exports: [UColDirective, URowDirective],
  imports: [CommonModule, LayoutModule, PlatformModule],
})
export class UGridModule {}
