import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ItemImageComponent } from './item-image/item-image.component';
import { CounterPiecesComponent } from './counter-pieces/counter-pieces.component';
import { FormsModule } from '@angular/forms';
import { ResumeShoppingComponent } from './resume-shopping/resume-shopping.component';

@NgModule({
  declarations: [
    CartItemComponent,
    ItemImageComponent,
    CounterPiecesComponent,
    ResumeShoppingComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CartItemComponent, ResumeShoppingComponent],
})
export class ComponentsModule {}
