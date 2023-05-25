import { ArrayConst, NumberConst, StringConst } from 'src/app/constants/const';
export class ItemProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  constructor() {
    this.id = NumberConst.zero;
    this.title = StringConst.empty;
    this.description = StringConst.empty;
    this.image = StringConst.empty;
    this.category = StringConst.empty;
    this.price = NumberConst.zero;
    this.quantity = NumberConst.zero;
  }
}
export class ShopCarClass {
  id: number;
  subtotal: number;
  tax: number;
  total: number;
  totalProduct: number;
  pieces: number;
  delivery: string;
  deliveryCost: number;
  products: Array<ItemProduct>;
  constructor() {
    this.id = NumberConst.zero;
    this.pieces = NumberConst.zero;
    this.delivery = StringConst.empty;
    this.subtotal = NumberConst.zero;
    this.tax = NumberConst.zero;
    this.total = NumberConst.zero;
    this.totalProduct = NumberConst.zero;
    this.products = ArrayConst.empty;
    this.deliveryCost = NumberConst.zero;
  }
}
