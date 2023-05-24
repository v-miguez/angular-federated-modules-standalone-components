import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'products',
    loadChildren: () =>
      import('productsCatalog/routes').then((m) => m.PRODUCTS_ROUTES),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
