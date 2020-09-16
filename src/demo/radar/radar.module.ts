import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoRadarComponent } from './radar';
import { RouterModule, Routes } from '@angular/router';
import { UdemoRadarBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, URadarModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoRadarComponent }];

const icons: UIconDefinition[] = [
  AllIcons.UIconLeft,
  AllIcons.UIconRight,
  AllIcons.UIconUp,
  AllIcons.UIconDown,
  AllIcons.UIconBars,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    URadarModule,
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoRadarComponent, UdemoRadarBasicComponent],
})
export class UdemoRadarModule { }
