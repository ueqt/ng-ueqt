import { FormsModule } from '@angular/forms';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { UdemoModalBasicComponent, UdemoModalTestComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule, UModalModule } from 'ng-ueqt';
import { UdemoModalComponent } from './modal';
const routes: Routes = [{ path: '', component: UdemoModalComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UButtonModule,
    UModalModule,
  ],
  declarations: [
    UdemoModalComponent,
    UdemoModalBasicComponent,
    UdemoModalTestComponent
  ],
})
export class UdemoModalModule { }
