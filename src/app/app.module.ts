import { UThemeModule } from './../../ng-ueqt/src/components/theme/theme.module';
import { UIconBars } from './../../ng-ueqt/src/components/icon/primer-icons/three-bars';
import { UIconRight } from './../../ng-ueqt/src/components/icon/primer-icons/chevron-right';
import { UIconLeft } from './../../ng-ueqt/src/components/icon/primer-icons/chevron-left';
import { UMenuModule } from './../../ng-ueqt/src/components/menu/menu.module';
import { ULayoutModule } from './../../ng-ueqt/src/components/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIconDefinition, UIconModule } from 'ng-ueqt';

const icons: UIconDefinition[] = [UIconLeft, UIconRight, UIconBars];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ULayoutModule,
    UMenuModule,
    UThemeModule,
    UIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
