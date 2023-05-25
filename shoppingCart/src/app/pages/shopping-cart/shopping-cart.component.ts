import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberConst } from 'src/app/constants/const';
import { RoutesInfo } from 'src/app/constants/routes';
import { ShopCarClass } from 'src/app/model/http/shoppingCart.model';
// import { ConsumeService } from 'src/app/services/consume.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'axity-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  infoPages = RoutesInfo.shoppingCart;
  subscription: Subscription = new Subscription();
  idCart: number = NumberConst.zero;
  shopCart: ShopCarClass = new ShopCarClass();
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    // consultar del local storage el id del carrito y el user mock = 1
    this.idCart = NumberConst.one;
    this.getShoppingCart();
  }
  getShoppingCart = (): void => {
    this.subscription.add(
      this.shoppingCartService
        .getShoppingCart(this.idCart)
        .subscribe(this.okShoppingCart, this.errorShoppingCart)
    );
  };
  okShoppingCart = (response: ShopCarClass): void => {
    this.shopCart = response;
  };
  errorShoppingCart = (error: any): void => {};
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
