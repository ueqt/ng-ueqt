import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/icon', pathMatch: 'full' },
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
    path: 'tabs',
    loadChildren: () =>
      import('../demo/tabs/tabs.module').then((m) => m.UdemoTabsModule),
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
export class AppRoutingModule {}
