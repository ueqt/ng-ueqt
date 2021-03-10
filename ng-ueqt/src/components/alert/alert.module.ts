import { UAlertService } from './alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UAlertComponent } from './alert.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UButtonModule } from '../button';

const components = [
  UAlertComponent
];

@NgModule({
  imports: [CommonModule, OverlayModule, UButtonModule],
  exports: [...components],
  declarations: [...components],
  entryComponents: [UAlertComponent],
  providers: [UAlertService]
})
export class UAlertModule { }
