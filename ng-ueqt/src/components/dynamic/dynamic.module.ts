import { UDynamicService } from './dynamic.service';
import { NgModule } from '@angular/core';

const directives = [
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  providers: [UDynamicService]
})
export class UDynamicModule { }
