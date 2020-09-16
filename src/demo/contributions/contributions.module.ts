import { UTabsModule } from '../../../ng-ueqt/src/components/tabs/tabs.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoContributionsComponent } from './contributions';
import { RouterModule, Routes } from '@angular/router';
import { UdemoContributionsBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AllIcons, UContributionsModule, UIconDefinition, UIconModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoContributionsComponent }];

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
    UContributionsModule,
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoContributionsComponent, UdemoContributionsBasicComponent],
})
export class UdemoContributionsModule { }
