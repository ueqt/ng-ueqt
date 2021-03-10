import { UAlertModule } from './../../../ng-ueqt/src/components/alert/alert.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { UdemoAlertBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule } from 'ng-ueqt';
import { UdemoAlertComponent } from './alert';
const routes: Routes = [{ path: '', component: UdemoAlertComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UButtonModule,
    UAlertModule,
  ],
  declarations: [UdemoAlertComponent, UdemoAlertBasicComponent],
})
export class UdemoAlertModule { }
