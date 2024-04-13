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
}
