import {
  UMenuModule,
  UIconModule,
  UIconDefinition,
  UIconBars,
} from './../../../ng-ueqt/src/public-api';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoMenuComponent } from './menu';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoMenuBasicComponent } from './basic';
import { UdemoMenuCustomNodeComponent } from './custom-node';

const routes: Routes = [{ path: '', component: UdemoMenuComponent }];

const icons: UIconDefinition[] = [UIconBars];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UIconModule.forRoot([UIconBars]),
    UMenuModule,
  ],
  declarations: [
    UdemoMenuComponent,
    UdemoMenuBasicComponent,
    UdemoMenuCustomNodeComponent,
  ],
})
export class UdemoMenuModule {}
