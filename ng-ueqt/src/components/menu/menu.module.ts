import { OverlayModule } from '@angular/cdk/overlay';
import { UButtonModule } from './../button/button.module';
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

export const components = [
  UMenuComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    CdkTreeModule,
    OverlayModule,
    UIconModule.forChild(icons),
    UButtonModule
  ],
})
export class UMenuModule {}
