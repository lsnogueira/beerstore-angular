import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../utils/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product = null;
  @Output() buy = new EventEmitter<void>();
  productCopy: any;
  constructor() {}

  ngOnInit() {
    this.productCopy = this.product;
  }

  doBuy(e: any): void {
    this.buy.emit(this.productCopy);
  }
}
