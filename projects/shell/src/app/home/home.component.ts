import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  constructor() {}

  async ngOnInit() {
    await this.http.get('https://dummyjson.com/products');
  }
}
