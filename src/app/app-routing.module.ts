import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {
    path: 'grid',
    loadChildren: () =>
      import('../demo/grid/grid.module').then((m) => m.UdemoGridModule),
  },
  {
    path: 'icon',
    loadChildren: () =>
      import('../demo/icon/icon.module').then((m) => m.UdemoIconModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('../demo/menu/menu.module').then((m) => m.UdemoMenuModule),
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
