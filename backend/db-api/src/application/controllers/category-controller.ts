import { ICategoryHLRepository } from "@interfaces/categoryHL-interface";
import { CategoryRepository } from "@repositories/category-repository";
import { Request, Response } from "express";
import Errors from "@type/errors/custom-errors";
import { GetAllHLCategoriesUseCase } from "@usecases/category-usecase";

export class CategoryController {

  /*
    @getAllHLCategories
  */
  async getAllHLCategories(req: Request, res: Response) {
    const categoryRepository: ICategoryHLRepository = new CategoryRepository();
    const CategoryUseCase = new GetAllHLCategoriesUseCase(categoryRepository);
    try {
      const allCategories = await CategoryUseCase.execute();
      return res.status(200).json(allCategories);
    } catch (error) {
      console.error("Error getallCategories:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }
}
