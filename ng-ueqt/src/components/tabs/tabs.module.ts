import { UTabBodyComponent } from './tab-body.component';
import { UTabDirective } from './tab.directive';
import { UTabLabelDirective } from './tab-label.directive';
import { UTabsInkBarDirective } from './tabs-ink-bar.directive';
import { UTabsComponent } from './tabs.component';
import { UTabComponent } from './tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformModule } from '@angular/cdk/platform';
import { UIconModule } from '../icon';
import { ObserversModule } from '@angular/cdk/observers';
import { UTabsNavComponent } from './tabs-nav.component';

const directives = [
  UTabComponent,
  UTabsComponent,
  UTabsNavComponent,
  UTabBodyComponent,
  UTabsInkBarDirective,
  UTabLabelDirective,
  UTabDirective,
];

@NgModule({
  declarations: [directives],
  exports: [directives],
  imports: [CommonModule, UIconModule, PlatformModule, ObserversModule],
})
export class UTabsModule {}
