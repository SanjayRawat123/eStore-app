import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent {
  categories: Category[] = [];
  constructor(private categroyService: CategoryService) {
    this.categories = this.categroyService.getAllCategories();
  }

  
  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }

}
