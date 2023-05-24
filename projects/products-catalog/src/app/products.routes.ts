import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
];
