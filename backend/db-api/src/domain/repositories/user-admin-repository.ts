import { IProduct } from "@interfaces/product-interface";
import ProductModel from "@models/product-model";
import { _id, available } from "@type/product-types";

export class UserADMRepository {
  async getAllProductsADM(): Promise<IProduct[] | null> {
    const products: IProduct[] = await ProductModel.find({});
    return products;
  }

  async patchProductADM(
    _uid: _id,
    available: available
  ): Promise<IProduct | null> {
    const product: IProduct | null = await ProductModel.findOneAndUpdate(
      { id: _uid },
      { available: available }
    );
    return product;
  }
}
