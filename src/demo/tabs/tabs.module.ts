import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import {
  UdemoTabsBasicComponent,
  UDemoTabContentEagerlyComponent,
  UDemoTabContentLazyComponent,
} from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoTabsComponent } from './tabs';
import { UTabsModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoTabsComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
  ],
  declarations: [
    UdemoTabsComponent,
    UdemoTabsBasicComponent,
    UDemoTabContentEagerlyComponent,
    UDemoTabContentLazyComponent,
  ],
})
export class UdemoTabsModule {}
