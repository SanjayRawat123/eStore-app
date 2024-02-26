import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cartStoreItems';
import { CartItem } from '../../types/cart.type';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  faTrash = faTrash;

  constructor(private router: Router, public cartStore: CartStoreItem) {}
  ngOnInit(): void {}
  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }
}
