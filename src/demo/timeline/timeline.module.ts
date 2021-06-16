import { UViewerModule } from '../../../ng-ueqt/src/components/viewer/viewer.module';
import { FormsModule } from '@angular/forms';
import { UdemoTimelineBasicComponent } from './basic';
import { UdemoTimelineComponent } from './timeline';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule, UTimelineModule } from 'ng-ueqt';
const routes: Routes = [{ path: '', component: UdemoTimelineComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UTimelineModule
  ],
  declarations: [UdemoTimelineComponent, UdemoTimelineBasicComponent],
})
export class UdemoTimelineModule { }
