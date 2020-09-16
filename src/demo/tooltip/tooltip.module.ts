import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoTooltipComponent } from './tooltip';
import { RouterModule, Routes } from '@angular/router';
import { UdemoTooltipBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoTooltipPlacementComponent } from './placement';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UTooltipModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoTooltipComponent }];

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
    UTooltipModule,
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoTooltipComponent, UdemoTooltipBasicComponent, UdemoTooltipPlacementComponent],
})
export class UdemoTooltipModule { }
