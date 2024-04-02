import mongoose, { Schema } from "mongoose";
import { ICategoryHL } from "@interfaces/categoryHL-interface";

const CategoryHLSchema: Schema = new Schema({
  highlightTitle: { type: String, required: true },
  highlightProducts: { type: Array<String>, required: true },
  highlightImage: { type: String, required: true },
});

const CategoryHLModel = mongoose.model<ICategoryHL>(
  "highlight_categories",
  CategoryHLSchema
);

export default CategoryHLModel;
