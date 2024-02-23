import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import { CategoriesStoreItem } from '../../services/categories.storageItem';

@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.scss'],
})
export class CatnavigationComponent {
   constructor(public categoryStore: CategoriesStoreItem) {
     }
}
