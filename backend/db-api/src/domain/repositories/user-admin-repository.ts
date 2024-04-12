import { IProduct } from "@interfaces/product-interface";
import ProductModel from "@models/product-model";

export class UserADMRepository {
  async getAllProductsADM(): Promise<IProduct[] | null> {
    const products: IProduct[] = await ProductModel.find({});
    return products;
  }
}
