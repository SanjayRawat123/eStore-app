import { StoreItem } from 'src/app/shared/storeItem';
import { Cart, CartItem } from '../../types/cart.type';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Product } from '../../types/products.type';

@Injectable()
export class CartStoreItem extends StoreItem<Cart> {
  constructor() {
    super({
      products: [],
      totalAmount: 0,
      totalProducts:0
    });
  }
}
