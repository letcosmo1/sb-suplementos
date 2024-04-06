export interface IProductSale {
  product: {
    name: string;
    price: number;
    description: string;
    transactionID?: number | any;
    flavor?: string | any
  };
}
