import {
  ICategoryHL,
  ICategoryHLRepository,
} from "@interfaces/categoryHL-interface";
import CategoryHLModel from "@models/categoryHL-model";

export class CategoryRepository {
  async getAllCategoriesHL(): Promise<ICategoryHL[]> {
    const categories: ICategoryHL[] = await CategoryHLModel.find({});
    return categories;
  }
}
