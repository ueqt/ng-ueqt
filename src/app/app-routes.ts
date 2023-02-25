import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/icon', pathMatch: 'full' },
  {
    path: ':type',
    loadComponent: () =>
      import('./demo').then((m) => m.UdemoDemoComponent),
  },
];
