import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  productsList$ = signal([]);

  getProducts() {
    this.http
      .get('https://dummyjson.com/products')
      .subscribe((response: any) => {
        this.productsList$.set(response.products);
      });
  }

  getProductList() {
    return this.productsList$;
  }
}
