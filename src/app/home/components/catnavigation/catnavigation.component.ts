import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storageItem';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.scss'],
})
export class CatnavigationComponent {
  @Output() categoryClicked: EventEmitter<number> =
    new EventEmitter<number>();
  constructor(public categoryStore: CategoriesStoreItem) {}

  onCategoryClick(category:Category):void{
    return this.categoryClicked.emit(category.id);
  }
}
