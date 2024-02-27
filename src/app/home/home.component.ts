import { Component, OnInit } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storageItem';
import { ProductStoreItem } from './services/product/productStoreItem';
import { SearchKeyword } from './types/searchKeyword.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productStoreItem: ProductStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url == '/home') {
          router.navigate(['/home/products']);
        }
      });
  }
  ngOnInit(): void {}

  onSelectCategory(mainCategoryId: number) {
    this.productStoreItem.loadProducts('mainCategoryId= ' + mainCategoryId);
  }

  onsearchKeyword(searchKeyword: SearchKeyword) {
    this.productStoreItem.loadProducts(
      'mainCategoryId= ' +
        searchKeyword.categoryId +
        '&keyword=' +
        searchKeyword.keyword
    );
  }
}
