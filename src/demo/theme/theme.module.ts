import { UdemoThemeBasicComponent } from './basic';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UTabsModule, UButtonModule } from 'ng-ueqt';
import { UdemoThemeComponent } from './theme';

const routes: Routes = [{ path: '', component: UdemoThemeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UButtonModule
  ],
  declarations: [
    UdemoThemeComponent,
    UdemoThemeBasicComponent
  ],
})
export class UdemoThemeModule { }
