import { IProductADMRepository } from "@interfaces/product-admin-interface";
import { UserADMRepository } from "@repositories/user-admin-repository";
import {
  GetAllProductsADMUseCase,
  PatchProductADMUseCase,
} from "@usecases/user-admin-usecase";
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

  async patchProductADM(req: Request, res: Response) {
    const _uid = req.params.id;
    const available = req.body.available;

    const ProductADM: IProductADMRepository = new UserADMRepository();
    const ProductADMUseCase = new PatchProductADMUseCase(ProductADM);
    try {
      const allProducts = await ProductADMUseCase.execute(_uid, available);
      return res.status(200).json(allProducts);
    } catch (error) {
      console.error("Error getAllProducts:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }
}
