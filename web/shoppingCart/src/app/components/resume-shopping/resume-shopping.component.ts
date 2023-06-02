import { Component, Input } from '@angular/core';
import { CartDetail } from 'src/app/model/http/shoppingCart.model';

@Component({
  selector: 'axity-resume-shopping',
  templateUrl: './resume-shopping.component.html',
  styleUrls: ['./resume-shopping.component.scss'],
})
export class ResumeShoppingComponent {
  @Input() shopCart: CartDetail = new CartDetail();
}
