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
    path: 'contributions',
    loadChildren: () =>
      import('../demo/contributions/contributions.module').then((m) => m.UdemoContributionsModule),
  },
  {
    path: 'icon',
    loadChildren: () =>
      import('../demo/icon/icon.module').then((m) => m.UdemoIconModule),
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
    path: 'radar',
    loadChildren: () =>
      import('../demo/radar/radar.module').then((m) => m.UdemoRadarModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('../demo/tabs/tabs.module').then((m) => m.UdemoTabsModule),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('../demo/tooltip/tooltip.module').then((m) => m.UdemoTooltipModule),
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
