import { UMenuComponent } from './menu.component';
import { UIconModule } from './../icon/icon.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIconDefinition, UIconUp, UIconDown } from '../icon';

const icons: UIconDefinition[] = [UIconUp, UIconDown];

@NgModule({
  declarations: [UMenuComponent],
  exports: [UMenuComponent],
  imports: [CommonModule, CdkTreeModule, UIconModule.forChild(icons)],
})
export class UMenuModule {}
