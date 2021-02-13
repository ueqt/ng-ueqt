import { UCardModule } from './../../../ng-ueqt/src/components/card/card.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UTabsModule, UButtonModule } from 'ng-ueqt';
import { UdemoCardComponent } from './card';
import { UdemoCardBasicComponent } from './basic';

const routes: Routes = [{ path: '', component: UdemoCardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UCardModule,
    UButtonModule
  ],
  declarations: [
    UdemoCardComponent,
    UdemoCardBasicComponent
  ],
})
export class UdemoCardModule { }
