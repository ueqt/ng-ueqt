import { UdemoGridFlexStretchComponent } from './flex-stretch';
import { UTabsModule } from './../../../ng-ueqt/src/components/tabs/tabs.module';
import { UCodeboxModule } from './../../app/codebox/codebox.module';
import { UGridModule } from './../../../ng-ueqt/src/components/grid/grid.module';
import { UdemoGridComponent } from './grid';
import { RouterModule, Routes } from '@angular/router';
import { UdemoGridBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [{ path: '', component: UdemoGridComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UGridModule,
    UTabsModule,
  ],
  declarations: [
    UdemoGridComponent,
    UdemoGridBasicComponent,
    UdemoGridFlexStretchComponent,
  ],
})
export class UdemoGridModule {}
