import { UOutletModule } from './../core/outlet/outlet.module';
import { FormsModule } from '@angular/forms';
import { USwitchComponent } from './switch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  USwitchComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, UOutletModule],
  exports: [...components],
  declarations: [...components]
})
export class USwitchModule { }
