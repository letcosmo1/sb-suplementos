import { isValidObjectId } from "mongoose";
import { ProductsRepository } from "@repositories/products-repository";
import { IProductRepository } from "@interfaces/product-interface";
import { _id, category, title } from "@type//product-types";

export class ProductValidatorService {
  private produtoRepository: IProductRepository;

  constructor() {
    this.produtoRepository = new ProductsRepository();
  }

  async validProductID(id: _id): Promise<boolean> {
    return isValidObjectId(id);
  }

  async validProductName(title: title): Promise<boolean> {
    if (!title) return false;
    const product = await this.produtoRepository.getProductByName(title);
    if (product?.length === 0) return false;
    return !!product;
  }

  async validCategory(category: category): Promise<boolean> {
    if(!category) return false;
    const product = await this.produtoRepository.getProductByCategory(category);
    if (product?.length === 0) return false;
    return !!product;
  }
}
