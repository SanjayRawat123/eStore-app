import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/categories.storageItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem) {
    this.categoriesStoreItem.loadCategories();
  }
}
