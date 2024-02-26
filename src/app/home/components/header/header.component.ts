import { Component, EventEmitter, Output } from '@angular/core';
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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  displaySearch: boolean = true;

  @Output() searchClicked: EventEmitter<SearchKeyword> =
    new EventEmitter<SearchKeyword>();
  constructor(
    public categoryStore: CategoriesStoreItem,
    private router: Router,
    public cartStore: CartStoreItem
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.displaySearch =
          (event as NavigationEnd).url === '/home/products' ? true : false;
      });
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
