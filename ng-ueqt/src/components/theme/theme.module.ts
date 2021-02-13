import { UThemeService } from './theme.service';
import { NgModule } from '@angular/core';

const directives = [
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  providers: [UThemeService]
})
export class UThemeModule { }
