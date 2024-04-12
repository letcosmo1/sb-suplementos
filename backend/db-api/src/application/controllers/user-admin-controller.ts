import { IProductADMRepository } from "@interfaces/product-admin-interface";
import { UserADMRepository } from "@repositories/user-admin-repository";
import { GetAllProductsADMUseCase } from "@usecases/user-admin-usecase";
import { Request, Response } from "express";
import Errors from "@type//errors/custom-errors";

export class UserAdminController {
  async getAllProductsADM(req: Request, res: Response) {
    const ProductADM: IProductADMRepository = new UserADMRepository();
    const ProductADMUseCase = new GetAllProductsADMUseCase(ProductADM);

    try {
      const allProducts = await ProductADMUseCase.execute();
      return res.status(200).json(allProducts);
    } catch (error) {
      console.error("Error getAllProducts:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }
}
