import { UViewerModule } from './../../../ng-ueqt/src/components/viewer/viewer.module';
import { FormsModule } from '@angular/forms';
import { UdemoViewerBasicComponent } from './basic';
import { UdemoViewerComponent } from './viewer';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule } from 'ng-ueqt';
const routes: Routes = [{ path: '', component: UdemoViewerComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UViewerModule,
  ],
  declarations: [UdemoViewerComponent, UdemoViewerBasicComponent],
})
export class UdemoViewerModule { }
