import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { USiderComponent } from './sider.component';
import { USiderTriggerComponent } from './sider-trigger.component';
import { UIconModule } from '../icon';
import { UFooterComponent } from './footer.component';
import { UContentComponent } from './content.component';
import { UHeaderComponent } from './header.component';
import { ULayoutComponent } from './layout.component';

const components = [
  ULayoutComponent,
  UHeaderComponent,
  UContentComponent,
  UFooterComponent,
  USiderComponent,
  USiderTriggerComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, UIconModule, LayoutModule, PlatformModule],
})
export class ULayoutModule { }
