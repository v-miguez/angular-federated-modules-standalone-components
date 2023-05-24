import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
/*   http = inject(HttpClient);
 */  productsList$ = signal([]);

  async getProducts() {
    /*     const response = await this.http.get('https://dummyjson.com/products');
     */ console.log('response');
  }
}
