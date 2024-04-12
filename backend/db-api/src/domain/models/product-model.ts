import { IProduct } from "src/domain/entities/interfaces/product-interface";
import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  flavor: { type: String, required: true },
  weight: { type: String, required: true },
  category: { type: String, required: true },
  table: { type: String, required: true },
  available: { type: Boolean, required: true },
});

const ProductModel = mongoose.model<IProduct>("products", ProductSchema);

export default ProductModel;
