import { UTabsModule } from './../../../ng-ueqt/src/components/tabs/tabs.module';
import { UIconBars } from './../../../ng-ueqt/src/components/icon/primer-icons/three-bars';
import { UIconDown } from './../../../ng-ueqt/src/components/icon/primer-icons/chevron-down';
import { UIconUp } from './../../../ng-ueqt/src/components/icon/primer-icons/chevron-up';
import { UIconRight } from './../../../ng-ueqt/src/components/icon/primer-icons/chevron-right';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoIconComponent } from './icon';
import { RouterModule, Routes } from '@angular/router';
import { UdemoIconBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AllIcons, UIconDefinition, UIconModule } from 'ng-ueqt/public-api';

const routes: Routes = [{ path: '', component: UdemoIconComponent }];

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
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoIconComponent, UdemoIconBasicComponent],
})
export class UdemoIconModule {}
