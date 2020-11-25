import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UButtonComponent } from './button.component';

const components = [
    UButtonComponent
];

@NgModule({
    imports: [CommonModule],
    exports: [...components],
    declarations: [...components]
})
export class UButtonModule { }
