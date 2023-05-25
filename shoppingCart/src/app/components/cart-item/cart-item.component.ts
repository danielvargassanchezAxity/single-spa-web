import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ItemProduct } from 'src/app/model/http/shoppingCart.model';

@Component({
  selector: 'axity-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() setQuantity: EventEmitter<number> = new EventEmitter();
  @Input() product: ItemProduct = new ItemProduct();
}
