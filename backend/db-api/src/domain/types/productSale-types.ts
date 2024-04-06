export interface IProductSale {
  product: {
    name: string;
    price: number;
    transactionID?: number | any;
    flavor?: string | any
  };
}
