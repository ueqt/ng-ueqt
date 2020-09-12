import { UTooltipModule } from './../../../ng-ueqt/src/components/tooltip/tooltip.module';
import { UTabsModule } from '../../../ng-ueqt/src/components/tabs/tabs.module';
import { UIconBars } from '../../../ng-ueqt/src/components/icon/primer-icons/three-bars';
import { UIconDown } from '../../../ng-ueqt/src/components/icon/primer-icons/chevron-down';
import { UIconUp } from '../../../ng-ueqt/src/components/icon/primer-icons/chevron-up';
import { UIconRight } from '../../../ng-ueqt/src/components/icon/primer-icons/chevron-right';
import {
  UIconDefinition,
  UIconModule,
  UIconLeft,
} from '../../../ng-ueqt/src/components/icon';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoTooltipComponent } from './tooltip';
import { RouterModule, Routes } from '@angular/router';
import { UdemoTooltipBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoTooltipPlacementComponent } from './placement';

const routes: Routes = [{ path: '', component: UdemoTooltipComponent }];

const icons: UIconDefinition[] = [
  UIconLeft,
  UIconRight,
  UIconUp,
  UIconDown,
  UIconBars,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    UTooltipModule,
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoTooltipComponent, UdemoTooltipBasicComponent, UdemoTooltipPlacementComponent],
})
export class UdemoTooltipModule { }