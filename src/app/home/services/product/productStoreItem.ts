import { StoreItem } from 'src/app/shared/storeItem';
import { Product } from '../../types/products.type';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProductStoreItem extends StoreItem<Product[]> {
  constructor(private productService: ProductsService) {
    super([]);
  }

  async loadProducts(query?: string) {
    this.productService.getAllProducts(query).subscribe((products) => {
      this.setValue(products);
    });
  }

  get products$(): Observable<Product[]> {
    return this.value$;
  }

  get products(): Product[] {
    return this.value;
  }
}
