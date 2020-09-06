import { NgModule } from '@angular/core';
import { UConnectedOverlayDirective } from './connected-overlay';

@NgModule({
  declarations: [UConnectedOverlayDirective],
  exports: [UConnectedOverlayDirective]
})
export class UOverlayModule { }
