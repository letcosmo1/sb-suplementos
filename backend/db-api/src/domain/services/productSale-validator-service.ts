import { IProductSale } from "@type/productSale-types";

export class ProductSaleValidatorService {
  async validProduct({ product }: IProductSale) {
    if (!product) {
      return false;
    }
    if (!product.name || !product.price ) {
      return false;
    }
    return true;
  }
}
