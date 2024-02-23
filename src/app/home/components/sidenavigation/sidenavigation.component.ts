import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../../services/categories.storageItem';
@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent {
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();
  
  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
