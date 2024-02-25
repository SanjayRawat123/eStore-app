import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storageItem';
import { ProductStoreItem } from './services/product/productStoreItem';

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

  onSelectSubCategory(subCategoryId: any): void {
    this.productStoreItem.loadProducts('subCategoryId= '+subCategoryId);
  }
}
