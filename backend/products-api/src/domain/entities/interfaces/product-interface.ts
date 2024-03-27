import { Document } from "mongoose";
import { _id, category, limit, page, title } from "../../types/product-types";

export interface IProduct extends Document {
  productImage: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productFlavor: string;
  productWeight: number;
  nutritionalTable: string;
  productCategory: string;
}

export interface IProductRepository {
  getAllProducts(page: page, limit: limit): Promise<IProduct[] | null>;
  getProductByName(title: title): Promise<IProduct[] | null>;
  getProductByNameAsc(): Promise<IProduct[] | null>;
  getProductByNameDesc(): Promise<IProduct[] | null>;
  getProductByPriceAsc(): Promise<IProduct[] | null>;
  getProductByPriceDesc(): Promise<IProduct[] | null>;
  getProductById(id: _id): Promise<IProduct | null>;
  getProductByCategory(category: category): Promise<IProduct[] | null>;
  getProductByCategoryAsc(category: category): Promise<IProduct[] | null>;
  getProductByCategoryDesc(category: category): Promise<IProduct[] | null>;
}

export interface IProductByName {
  getProductByName(title: title): Promise<IProduct[] | null>;
}

export interface IProductByNameAsc {
  getProductByNameAsc(): Promise<IProduct[] | null>;
}

export interface IProductByNameDesc {
  getProductByNameDesc(): Promise<IProduct[] | null>;
}

export interface IProductByPriceAsc {
  getProductByPriceAsc(): Promise<IProduct[] | null>;
}

export interface IProductByPriceDesc {
  getProductByPriceDesc(): Promise<IProduct[] | null>;
}

export interface IProductByID {
  getProductById(id: _id): Promise<IProduct | null>;
}

export interface IProductByCategory {
  getProductByCategory(category: category): Promise<IProduct[] | null>;
  getProductByCategoryAsc(category: category): Promise<IProduct[] | null>;
  getProductByCategoryDesc(category: category): Promise<IProduct[] | null>;
  getProductByCategoryPriceAsc(category: category): Promise<IProduct[] | null>;
  getProductByCategoryPriceDesc(category: category): Promise<IProduct[] | null>;
  getProductByCategoryPrice(category: category): Promise<IProduct[] | null>;
}
