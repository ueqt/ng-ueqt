import { UdemoInputBasicComponent } from './basic';
import { UdemoInputComponent } from './input';
import { UInputModule } from './../../../ng-ueqt/src/components/input/input.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule } from 'ng-ueqt';
const routes: Routes = [{ path: '', component: UdemoInputComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UInputModule,
  ],
  declarations: [UdemoInputComponent, UdemoInputBasicComponent],
})
export class UdemoInputModule { }
