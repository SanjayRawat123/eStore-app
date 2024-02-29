import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import { NavigationEnd, Router } from '@angular/router';

import { CategoriesStoreItem } from '../../services/category/categories.storageItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cartStoreItems';

import { Subscription, forkJoin } from 'rxjs';
import { UserService } from '../../services/user/user-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  displaySearch: boolean = true;
  subscriptions: Subscription = new Subscription();
  isUserAuthenticated: boolean = false;
  userName: string = '';
  @Output() searchClicked: EventEmitter<SearchKeyword> =
    new EventEmitter<SearchKeyword>();
  constructor(
    public categoryStore: CategoriesStoreItem,
    private router: Router,
    public cartStore: CartStoreItem,
    public userService: UserService
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displaySearch =
          (event as NavigationEnd).url === '/home/products' ? true : false;
      });

    this.subscriptions.add(
      this.userService.isUserAuthenticated$.subscribe((result) => {
        this.isUserAuthenticated = result;
      })
    );

    this.subscriptions.add(
      this.userService.loggedInUser$.subscribe((result) => {
        this.userName = result.firstName;
      })
    );
  }
  logout(): void {
    this.userService.logout();
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onClickSearch(keyword: string, categoryId: string) {
    this.searchClicked.emit({
      keyword: keyword,
      categoryId: parseInt(categoryId),
    });
  }

  navigateToCart(): void {
    this.router.navigate(['home/cart']);
  }
}
