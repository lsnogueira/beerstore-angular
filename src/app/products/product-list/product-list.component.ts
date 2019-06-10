import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../utils/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.get().subscribe(
      products => {
        this.products = products;
      },
      () => {
        alert('Um erro inesperado aconteceu');
      }
    );
  }

  buyProduct(e: any): void {
    alert(`comprando ${e.name}`);
  }
}
