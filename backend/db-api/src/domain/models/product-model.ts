import { IProduct } from "src/domain/entities/interfaces/product-interface";
import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema({
  productImage: { type: String, required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productDescription: { type: String, required: true },
  productFlavor: { type: String, required: true },
  productWeight: { type: Number, required: true },
  productCategory: { type: String, required: true },
  nutritionalTable: { type: String, required: true },
});

const ProductModel = mongoose.model<IProduct>("products", ProductSchema);

export default ProductModel;
