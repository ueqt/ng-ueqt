import { UIconRight } from './../../ng-ueqt/src/components/icon/primer-icons/chevron-right';
import { UIconLeft } from './../../ng-ueqt/src/components/icon/primer-icons/chevron-left';
import { UMenuModule } from './../../ng-ueqt/src/components/menu/menu.module';
import { ULayoutModule } from './../../ng-ueqt/src/components/layout/layout.module';
import { DynamicModule } from './../../ng-ueqt/src/components/dynamic/dynamic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIconDefinition, UIconModule } from 'ng-ueqt/src/public-api';

const icons: UIconDefinition[] = [UIconLeft, UIconRight];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule,
    ULayoutModule,
    UMenuModule,
    UIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
