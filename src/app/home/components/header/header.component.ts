import { Component,EventEmitter,Output } from '@angular/core';
import {
  faSearch,
  faUserCircle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../../services/category/categories.storageItem';
import { SearchKeyword } from '../../types/searchKeyword.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  
  @Output()searchClicked:EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>();
  constructor(public categoryStore: CategoriesStoreItem) {}

  onClickSearch(keyword:string, categoryId:string){
        this.searchClicked.emit({keyword:keyword,categoryId:parseInt(categoryId)
        });
  }

}
