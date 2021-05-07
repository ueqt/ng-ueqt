import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { UdemoMenuComponent } from './menu';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UdemoMenuBasicComponent } from './basic';
import { UdemoMenuCustomNodeComponent } from './custom-node';
import { UIconDefinition, AllIcons, UIconModule, UTabsModule, UMenuModule } from 'ng-ueqt';

const routes: Routes = [{ path: '', component: UdemoMenuComponent }];

const icons: UIconDefinition[] = [
  AllIcons.UIconBars
];

@NgModule({
  imports: [
    UIconModule.forChild(icons)
  ]
})
export class UdemoMenuIconModule { }

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UdemoMenuIconModule,
    UTabsModule,
    UMenuModule,
  ],
  declarations: [
    UdemoMenuComponent,
    UdemoMenuBasicComponent,
    UdemoMenuCustomNodeComponent,
  ],
})
export class UdemoMenuModule {}
