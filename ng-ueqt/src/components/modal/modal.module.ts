import { UModalService } from './modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UModalComponent } from './modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UButtonModule } from '../button';
import { UDynamicModule } from '../dynamic';

const components = [
  UModalComponent
];

@NgModule({
  imports: [CommonModule, OverlayModule, UButtonModule, UDynamicModule],
  exports: [...components],
  declarations: [...components],
  providers: [UModalService]
  })
export class UModalModule { }
