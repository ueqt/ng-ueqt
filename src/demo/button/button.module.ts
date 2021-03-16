import { UInputModule } from './../../../ng-ueqt/src/components/input/input.module';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { UdemoButtonBasicComponent } from './basic';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UButtonModule } from 'ng-ueqt';
import { UdemoButtonComponent } from './button';
const routes: Routes = [{ path: '', component: UdemoButtonComponent }];

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
    UButtonModule,
    UInputModule,
    UIconModule.forRoot(icons),
  ],
  declarations: [UdemoButtonComponent, UdemoButtonBasicComponent],
})
export class UdemoButtonModule { }
