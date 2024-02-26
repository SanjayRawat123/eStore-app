import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/productStoreItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../types/products.type';
import { CartStoreItem } from '../../services/cart/cartStoreItems';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  faShoppingCart = faShoppingCart;
  constructor(
    public productsStore: ProductStoreItem,
    private cart: CartStoreItem
  ) {}
  
  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
