import { FormsModule } from '@angular/forms';
import { USwitchModule } from './../../../ng-ueqt/src/components/switch/switch.module';
import { UdemoSwitchBasicComponent } from './basic';
import { UdemoSwitchComponent } from './switch';
import { UCodeboxModule } from '../../app/codebox/codebox.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { UIconDefinition, allIcons, UIconModule, UTabsModule, UButtonModule } from 'ng-ueqt';
const routes: Routes = [{ path: '', component: UdemoSwitchComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    UCodeboxModule,
    UTabsModule,
    USwitchModule,
  ],
  declarations: [UdemoSwitchComponent, UdemoSwitchBasicComponent],
})
export class UdemoSwitchModule { }
