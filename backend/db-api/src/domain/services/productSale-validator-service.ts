import { IProductSale } from "@type/productSale-types";

export class ProductSaleValidatorService {
  async validProduct({ product }: IProductSale) {
    if (!product) {
      return false;
    }
    if (!product.name || !product.price || !product.description) return false;

    return true;
  }
}
