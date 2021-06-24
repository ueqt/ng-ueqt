import { FormsModule } from '@angular/forms';
import { UdemoFlexBasicComponent } from './basic';
import { UdemoFlexComponent } from './flex';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule, UFlexModule, UInputModule } from 'ng-ueqt';
const routes: Routes = [{ path: '', component: UdemoFlexComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UInputModule,
    UFlexModule
  ],
  declarations: [UdemoFlexComponent, UdemoFlexBasicComponent],
})
export class UdemoFlexModule { }
