import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../types/products.type';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../../services/cart/cartStoreItems';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product!: Product;
  subscriptions: Subscription = new Subscription();
  faShoppingCart = faShoppingCart;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cart: CartStoreItem
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product[0];
      })
    );
  }
  addToCart() {
    this.cart.addProduct(this.product);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
