import { UGridModule } from './../../../ng-ueqt/src/lib/components/grid/grid.module';
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
    UGridModule,
  ],
  declarations: [UdemoGridComponent, UdemoGridBasicComponent],
})
export class UdemoGridModule {}
