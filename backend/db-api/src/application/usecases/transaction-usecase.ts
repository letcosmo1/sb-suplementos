import { IProductSale } from "@type/productSale-types";
import { v4 as uuidv4 } from "uuid";

export class GenerateSaleUseCase {
  /*  Unused
  private productRepository;
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  */

  async execute(product: IProductSale) {
    const code = generateCode();
    if (!code) return generateCode();

    product.product.transactionID = code;

    return product;
  }
}

const generateCode = (): any => {
  const code = uuidv4();
  return code;
};
