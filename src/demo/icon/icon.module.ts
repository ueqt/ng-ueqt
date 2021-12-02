import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoIconComponent } from './icon';
import { RouterModule, Routes } from '@angular/router';
import { UdemoIconBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { allIconDefs, UIconModule, UTabsModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoIconComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UIconModule.forRoot(allIconDefs),
  ],
  declarations: [UdemoIconComponent, UdemoIconBasicComponent],
})
export class UdemoIconModule {}
