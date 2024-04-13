import { Document } from "mongoose";
import {
  _id,
  available,
  category,
  limit,
  page,
  title,
} from "../../types/product-types";

export interface IProduct extends Document {
  productImage: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  productFlavor: string;
  productWeight: number;
  nutritionalTable: string;
  productCategory: string;
  available: boolean;
}

export interface IProductADMRepository {
  getAllProductsADM(): Promise<IProduct[] | null>;
  patchProductADM(_uid: _id, available: available): Promise<IProduct | null>;
  getProductByNameADM(title: title): Promise<IProduct[] | null>;
  getProductByTitleAscADM(title: title): Promise<IProduct[] | null>;
  getProductByTitleDescADM(title: title): Promise<IProduct[] | null>;
  getProductByTitlePriceAscADM(title: title): Promise<IProduct[] | null>;
  getProductByTitlePriceDescADM(title: title): Promise<IProduct[] | null>;
  getProductByNameAscADM(): Promise<IProduct[] | null>;
  getProductByNameDescADM(): Promise<IProduct[] | null>;
  getProductByPriceAscADM(): Promise<IProduct[] | null>;
  getProductByPriceDescADM(): Promise<IProduct[] | null>;
  getProductByIdADM(id: _id): Promise<IProduct | null>;
  getProductByCategoryADM(category: category): Promise<IProduct[] | null>;
  getProductByCategoryAscADM(category: category): Promise<IProduct[] | null>;
  getProductByCategoryDescADM(category: category): Promise<IProduct[] | null>;
}

export interface IProductByNameADM {
  getProductByNameADM(title: title): Promise<IProduct[] | null>;
}
export interface IProductByTitleAscADM {
  getProductByTitleAscADM(title: title): Promise<IProduct[] | null>;
}
export interface IProductByTitleDescADM {
  getProductByTitleDescADM(title: title): Promise<IProduct[] | null>;
}
export interface IProductByTitlePriceAscADM {
  getProductByTitlePriceAscADM(title: title): Promise<IProduct[] | null>;
}
export interface IProductByTitlePriceDescADM {
  getProductByTitlePriceDescADM(title: title): Promise<IProduct[] | null>;
}
export interface IProductByNameAscADM {
  getProductByNameAscADM(): Promise<IProduct[] | null>;
}
export interface IProductByNameDescADM {
  getProductByNameDescADM(): Promise<IProduct[] | null>;
}
export interface IProductByPriceAscADM {
  getProductByPriceAscADM(): Promise<IProduct[] | null>;
}
export interface IProductByPriceDescADM {
  getProductByPriceDescADM(): Promise<IProduct[] | null>;
}
export interface IProductByIDADM {
  getProductByIdADM(id: _id): Promise<IProduct | null>;
}
export interface IProductByCategoryADM {
  getProductByCategoryADM(category: category): Promise<IProduct[] | null>;
  getProductByCategoryAscADM(category: category): Promise<IProduct[] | null>;
  getProductByCategoryDescADM(category: category): Promise<IProduct[] | null>;
  getProductByCategoryPriceAscADM(
    category: category
  ): Promise<IProduct[] | null>;
  getProductByCategoryPriceDescADM(
    category: category
  ): Promise<IProduct[] | null>;
  getProductByCategoryPriceADM(category: category): Promise<IProduct[] | null>;
}
