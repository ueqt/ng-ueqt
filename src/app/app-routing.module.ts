import { UdemoThemeModule } from './../demo/theme/theme.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/icon', pathMatch: 'full' },
  {
    path: 'button',
    loadChildren: () =>
      import('../demo/button/button.module').then((m) => m.UdemoButtonModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('../demo/card/card.module').then((m) => m.UdemoCardModule),
  },
  {
    path: 'contributions',
    loadChildren: () =>
      import('../demo/contributions/contributions.module').then((m) => m.UdemoContributionsModule),
  },
  {
    path: 'dynamic',
    loadChildren: () =>
      import('../demo/dynamic/dynamic.module').then((m) => m.UdemoDynamicModule),
  },
  {
    path: 'icon',
    loadChildren: () =>
      import('../demo/icon/icon.module').then((m) => m.UdemoIconModule),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('../demo/input/input.module').then((m) => m.UdemoInputModule),
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('../demo/layout/layout.module').then((m) => m.UdemoLayoutModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('../demo/menu/menu.module').then((m) => m.UdemoMenuModule),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('../demo/modal/modal.module').then((m) => m.UdemoModalModule),
  },
  {
    path: 'radar',
    loadChildren: () =>
      import('../demo/radar/radar.module').then((m) => m.UdemoRadarModule),
  },
  {
    path: 'switch',
    loadChildren: () =>
      import('../demo/switch/switch.module').then((m) => m.UdemoSwitchModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('../demo/tabs/tabs.module').then((m) => m.UdemoTabsModule),
  },
  {
    path: 'theme',
    loadChildren: () =>
      import('../demo/theme/theme.module').then((m) => m.UdemoThemeModule),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('../demo/tooltip/tooltip.module').then((m) => m.UdemoTooltipModule),
  },
  {
    path: 'viewer',
    loadChildren: () =>
      import('../demo/viewer/viewer.module').then((m) => m.UdemoViewerModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
