import { UMenuComponent } from './menu.component';
import { UIconModule } from './../icon/icon.module';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIconDefinition } from '../icon';
import * as PrimerIcons from '../icon/primer-icons';

const icons: UIconDefinition[] = [
  PrimerIcons.UIconUp,
  PrimerIcons.UIconDown,
  PrimerIcons.UIconLeft,
  PrimerIcons.UIconRight
];

@NgModule({
  declarations: [UMenuComponent],
  exports: [UMenuComponent],
  imports: [
    CommonModule,
    CdkTreeModule,
    UIconModule.forChild(icons)
  ],
})
export class UMenuModule {}
