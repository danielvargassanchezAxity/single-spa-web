import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberConst } from 'src/app/constants/const';
import { RoutesInfo } from 'src/app/constants/routes';
import { ItemProduct, ShopCarClass } from 'src/app/model/http/shoppingCart.model';
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
  userId = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }
  ngOnInit(): void {
    this.idCart = NumberConst.one;
    this.userId = Number(localStorage.getItem("userId"));
    this.getShoppingCart();
  }

  getShoppingCart = (): void => {
    this.shoppingCartService
      .getShoppingCart(this.idCart, this.userId)
      .subscribe(this.okShoppingCart, this.errorShoppingCart)
  };
  okShoppingCart = (response: ShopCarClass): void => {
    this.shopCart = response;
  };

  errorShoppingCart = (error: any): void => { };

  ngOnDestroy(): void {
  }

  updateProductQuantity(changeProduct: ItemProduct, quantity: number): void {
    const itemToSave = {...this.shopCart};
    itemToSave.products = itemToSave.products.map((product) => {
      return {...product, quantity: product.id == changeProduct.id ? quantity : product.quantity};
    }); 
    this.shoppingCartService.updateList(itemToSave).subscribe((res)=> {
      this.shopCart = res;
    });
  }

  deleteProduct(product: ItemProduct): void {
    const itemToSave = {...this.shopCart};
    itemToSave.products = itemToSave.products.filter(x => x.id !== product.id);
    this.shoppingCartService.updateList(itemToSave).subscribe((res)=> {
      this.shopCart = res;
    });
  }
}
