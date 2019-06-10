import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  providers: [ProductsService],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule]
})
export class ProductsModule {}
