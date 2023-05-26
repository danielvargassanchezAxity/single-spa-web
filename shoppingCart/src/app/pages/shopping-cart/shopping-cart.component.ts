import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberConst } from 'src/app/constants/const';
import { RoutesInfo } from 'src/app/constants/routes';
import { CartDetail, ItemProduct, ShopCarClass } from 'src/app/model/http/shoppingCart.model';
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
  detailCar = new CartDetail();

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
    this.updateTotal();
  };

  updateTotal(): void {
    this.detailCar.totalProduct = this.shopCart.products.length;
    this.detailCar.total = this.shopCart.products.reduce((total, item) => (item.quantity * item.price) + total, 0);
    this.detailCar.pieces = this.shopCart.products.reduce((total, item)=> item.quantity + total , 0)
  }

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
      this.updateTotal();
    });
  }

  deleteProduct(product: ItemProduct): void {
    const itemToSave = {...this.shopCart};
    itemToSave.products = itemToSave.products.filter(x => x.id !== product.id);
    this.shoppingCartService.updateList(itemToSave).subscribe((res)=> {
      this.shopCart = res;
      this.updateTotal();
    });
  }
}
