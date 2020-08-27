import { UTabsModule } from './../../../ng-ueqt/src/components/tabs/tabs.module';
import { ULayoutModule } from './../../../ng-ueqt/src/components/layout/layout.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoLayoutComponent } from './layout';
import { RouterModule, Routes } from '@angular/router';
import { UdemoLayoutBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [{ path: '', component: UdemoLayoutComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    ULayoutModule,
  ],
  declarations: [UdemoLayoutComponent, UdemoLayoutBasicComponent],
})
export class UdemoLayoutModule {}
