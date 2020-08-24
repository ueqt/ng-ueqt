import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { USiderComponent } from './sider.component';
import { USiderTriggerComponent } from './sider-trigger.component';
import { UIconModule } from '../icon';

@NgModule({
  declarations: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    USiderComponent,
    USiderTriggerComponent,
  ],
  exports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    USiderComponent,
  ],
  imports: [CommonModule, UIconModule, LayoutModule, PlatformModule],
})
export class ULayoutModule {}
