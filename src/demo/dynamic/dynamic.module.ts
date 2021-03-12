import { UdemoDynamicBasicComponent } from './basic';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UTabsModule, UButtonModule } from 'ng-ueqt';
import { UdemoDynamicComponent } from './dynamic';

const routes: Routes = [{ path: '', component: UdemoDynamicComponent }];

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
    UdemoDynamicComponent,
    UdemoDynamicBasicComponent
  ],
})
export class UdemoDynamicModule { }
