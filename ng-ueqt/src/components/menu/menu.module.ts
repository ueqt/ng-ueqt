import { UMenuComponent } from './menu.component';
import { UIconModule } from './../icon/icon.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UMenuComponent],
  exports: [UMenuComponent],
  imports: [CommonModule, CdkTreeModule, UIconModule],
})
export class UMenuModule {}
