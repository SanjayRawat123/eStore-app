import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor( private http: HttpClient) { }

  getAllCategories():Observable<Category[]> {
    return  this.http.get<Category[]>("http://localhost:3000/productCategories");
  }

}
