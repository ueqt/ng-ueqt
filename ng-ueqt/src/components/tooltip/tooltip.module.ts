import { UOutletModule } from './../core/outlet/outlet.module';
import { UOverlayModule } from './../core/overlay/overlay.module';
import { NgModule } from '@angular/core';
import { UTooltipDirective } from './tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { UTooltipComponent } from './tooltip.component';

@NgModule({
    imports: [CommonModule, OverlayModule, UOutletModule, UOverlayModule],
    exports: [UTooltipDirective, UTooltipComponent],
    declarations: [UTooltipDirective, UTooltipComponent],
    entryComponents: [UTooltipComponent]
})
export class UTooltipModule { }
