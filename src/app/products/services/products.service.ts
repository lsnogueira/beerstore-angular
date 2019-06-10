import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../utils/models/product.model';


@Injectable()
export class ProductsService {
  static api = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(ProductsService.api);
  }

  getOne(id): Observable<Product> {
    return this.http.get<Product>(`${ProductsService.api}/${id}`);
  }
}
