import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService],
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProductsList();
  }
}
