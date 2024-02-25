import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storageItem';
import { ProductStoreItem } from './services/product/productStoreItem';
import { SearchKeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productStoreItem: ProductStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
  }

  onSelectSubCategory(subCategoryId: number): void {
    this.productStoreItem.loadProducts('subCategoryId= ' + subCategoryId);
  }

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
