import { Injectable } from '@angular/core';
import { ConsumeService } from './consume.service';
import { Observable } from 'rxjs';
import { ShopCarClass } from '../model/http/shoppingCart.model';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private consumeService: ConsumeService) {}

  getShoppingCart = (idCart: number, userId: number): Observable<ShopCarClass> => {
    return this.consumeService.httpGet(
      `${Endpoints.shoppingCart.base}/${idCart}?userId=${userId}`
    );
  };

  updateList = (data: ShopCarClass): Observable<ShopCarClass> => {
    return this.consumeService.httpPut(`${Endpoints.shoppingCart.base}/${data.id}`, data);
  }
}
