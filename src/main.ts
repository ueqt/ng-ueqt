import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withDebugTracing, withInMemoryScrolling } from '@angular/router';
import { primerIcons, UIconDefinition } from 'ng-ueqt';
import { provideIconRoot } from 'ng-ueqt/components/icon/icon.provider';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routes';

import { environment } from './environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

const icons: UIconDefinition[] = [primerIcons.uiconLeft, primerIcons.uiconRight, primerIcons.uiconBars];

bootstrapApplication(AppComponent, {
  providers: [
    provideIconRoot(icons),
    provideHttpClient(),
    provideRouter(routes,
      // withDebugTracing(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      })
    ),
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    importProvidersFrom(MarkdownModule.forRoot({ loader: HttpClient }))
  ]
}).catch(err => console.error(err));
