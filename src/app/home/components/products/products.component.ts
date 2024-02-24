import { Component } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../types/products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(productsService: ProductsService) {
    productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
