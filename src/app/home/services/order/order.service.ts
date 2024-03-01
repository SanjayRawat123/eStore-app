import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartStoreItem } from '../cart/cartStoreItems';
import { UserService } from '../user/user-service.service';
import { Order, OrderItem } from '../../types/order.type';
import { Observable } from 'rxjs';
import { DeliveryAddress } from '../../types/cart.type';

@Injectable()
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    private cartStore: CartStoreItem,
    private userservice: UserService
  ) {}

  saveOrder(
    deliveryAddress: DeliveryAddress,
    userEmail: string
  ): Observable<any> {
    console.log(deliveryAddress,userEmail)
    const url: string = 'http://localhost:3000/orders/add';
    const orderDetails: OrderItem[] = [];
    this.cartStore.cart.products.forEach((product) => {
      const orderItem: OrderItem = {
        productId: product.product.id,
        price: product.product.price,
        qty: product.quantity,
        amount: product.amount,
      };
      orderDetails.push(orderItem);
    });

    const order: Order = {
      userName: deliveryAddress.userName,
      address: deliveryAddress.address,
      city: deliveryAddress.city,
      state: deliveryAddress.state,
      pin: deliveryAddress.pin,
      total: this.cartStore.cart.totalAmount,
      userEmail: userEmail,
      orderDetails: orderDetails,
    };
    return this.httpClient.post(url, order, {
      headers: { authorization: this.userservice.token },
    });
  }
}
