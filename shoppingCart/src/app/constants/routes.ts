export interface IRouteInfo {
  titlePage: string;
  url: string;
  breadcrumb: Array<string>;
}
export const RoutesConst = {
  shoppingCart: 'shopping-cart',
};
export const RoutesInfo = {
  shoppingCart: {
    titlePage: 'Tus artículos',
    url: `${RoutesConst.shoppingCart}`,
    breadcrumb: ['Cart'],
  },
};
