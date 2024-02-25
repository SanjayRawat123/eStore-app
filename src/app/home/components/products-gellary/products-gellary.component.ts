import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/productStoreItem';
@Component({
  selector: 'app-products-gellary',
  templateUrl: './products-gellary.component.html',
  styleUrls: ['./products-gellary.component.scss']
})
export class ProductsGellaryComponent {

  constructor(private productsStoreItem:ProductStoreItem){
  }
 onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts('subCategoryId= ' + subCategoryId);
  }
}
