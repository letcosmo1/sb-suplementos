import ProductModel from "@models/product-model";
import {
  IProduct,
} from "src/domain/entities/interfaces/product-interface";
import { _id, category, limit, page, title } from "@type//product-types";

export class ProductsRepository {
  async getAllProducts(page: page, limit: limit): Promise<IProduct[]> {
    const startIndex = (page - 1) * limit;
    const products: IProduct[] = await ProductModel.find({})
      .skip(startIndex)
      .limit(limit);
    return products;
  }

  async getProductByName(title: title): Promise<IProduct[]> {
    const product: IProduct[] = await ProductModel.find({
      productName: { $regex: title, $options: "i" },
    });
    return product;
  }

  async getProductById(id: _id): Promise<IProduct | null> {
    const product: IProduct | null = await ProductModel.findById(id);
    return product;
  }

  async getProductByNameAsc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({}).sort({
      productName: 1,
    });
    return products;
  }

  async getProductByNameDesc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({}).sort({
      productName: -1,
    });
    return products;
  }

  async getProductByPriceAsc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({}).sort({ productPrice: 1 });
    return products;
  }

  async getProductByPriceDesc(): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({}).sort({
      productPrice: -1,
    });
    return products;
  }

  async getProductByCategory(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    });
    return products;
  }

  async getProductByCategoryAsc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    }).sort({ titulo: 1 });
    return products;
  }

  async getProductByCategoryDesc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    }).sort({ titulo: -1 });
    return products;
  }

  async getProductByCategoryPrice(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    });
    return products;
  }

  async getProductByCategoryPriceAsc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    }).sort({ productPrice: 1 });
    return products;
  }

  async getProductByCategoryPriceDesc(category: category): Promise<IProduct[]> {
    const products: IProduct[] = await ProductModel.find({
      productCategory: category,
    }).sort({ productPrice: -1 });
    return products;
  }
}
