import mongoose, { Schema } from "mongoose";
import { ICategoryHL } from "@interfaces/categoryHL-interface";

const CategoryHLSchema: Schema = new Schema({
  title: { type: String, required: true },
  products: { type: Array<String>, required: true },
  highlight_image: { type: String, required: true },
});

const CategoryHLModel = mongoose.model<ICategoryHL>(
  "highlight_categories",
  CategoryHLSchema
);

export default CategoryHLModel;
