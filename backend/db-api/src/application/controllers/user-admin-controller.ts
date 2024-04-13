import {
  IProductADMRepository,
  IProductByCategoryADM,
  IProductByIDADM,
  IProductByNameADM,
  IProductByNameAscADM,
  IProductByNameDescADM,
  IProductByPriceAscADM,
  IProductByPriceDescADM,
  IProductByTitleAscADM,
  IProductByTitleDescADM,
  IProductByTitlePriceAscADM,
  IProductByTitlePriceDescADM,
} from "@interfaces/product-admin-interface";
import { UserADMRepository } from "@repositories/user-admin-repository";
import {
  GetAllProductsADMUseCase,
  GetProductByCategoryADMUseCase,
  GetProductByCategoryAscADMUseCase,
  GetProductByCategoryDescADMUseCase,
  GetProductByCategoryPriceADMUseCase,
  GetProductByCategoryPriceAscADMUseCase,
  GetProductByCategoryPriceDescADMUseCase,
  GetProductByIdADMUseCase,
  GetProductByNameADMUseCase,
  GetProductByNameAscADMUseCase,
  GetProductByNameDescADMUseCase,
  GetProductByPriceAscADMUseCase,
  GetProductByPriceDescADMUseCase,
  GetProductByTitleAscADMUseCase,
  GetProductByTitleDescADMUseCase,
  GetProductByTitlePriceAscADMUseCase,
  GetProductByTitlePriceDescADMUseCase,
  PatchProductADMUseCase,
} from "@usecases/user-admin-usecase";
import { Request, Response } from "express";
import Errors from "@type//errors/custom-errors";
import { ProductValidatorService } from "@services/product-validator-service";

export class UserAdminController {
  private productService: ProductValidatorService;
  constructor() {
    this.productService = new ProductValidatorService();
  }

  /*
    @getAllProductsADM
  */
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

  /*
    @patchProductADM
  */
  async patchProductADM(req: Request, res: Response) {
    const _id = req.params._id;
    const available = req.body.available;

    const ProductADM: IProductADMRepository = new UserADMRepository();
    const ProductADMUseCase = new PatchProductADMUseCase(ProductADM);
    try {
      const allProducts = await ProductADMUseCase.execute(_id, available);
      return res.status(200).json(allProducts);
    } catch (error) {
      console.error("Error getAllProducts:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
    @getProductByNameADM
  */
  async getProductByNameADM(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByNameADM = new UserADMRepository();
    const ProductUseCase = new GetProductByNameADMUseCase(ProductRepository);
    try {
      const product = await ProductUseCase.execute(title);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByTitleAscADM
    */
  async getProductByTitleAscADM(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByTitleAscADM = new UserADMRepository();
    const ProductUseCase = new GetProductByTitleAscADMUseCase(
      ProductRepository
    );
    try {
      const product = await ProductUseCase.execute(title);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByTitleDescADM
    */
  async getProductByTitleDescADM(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByTitleDescADM = new UserADMRepository();
    const ProductUseCase = new GetProductByTitleDescADMUseCase(
      ProductRepository
    );
    try {
      const product = await ProductUseCase.execute(title);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByTitlePriceAscADM
    */
  async getProductByTitlePriceAscADM(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByTitlePriceAscADM =
      new UserADMRepository();
    const ProductUseCase = new GetProductByTitlePriceAscADMUseCase(
      ProductRepository
    );
    try {
      const product = await ProductUseCase.execute(title);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByTitlePriceDescADM
    */
  async getProductByTitlePriceDescADM(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByTitlePriceDescADM =
      new UserADMRepository();
    const ProductUseCase = new GetProductByTitlePriceDescADMUseCase(
      ProductRepository
    );
    try {
      const product = await ProductUseCase.execute(title);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByIdADM
    */
  async getProductByIdADM(req: Request, res: Response) {
    const id = req.params.id;

    if (!(await this.productService.validProductID(id))) {
      return res.status(Errors.INVALID_ID.code).json(Errors.INVALID_ID);
    }

    const ProductRepository: IProductByIDADM = new UserADMRepository();
    const ProductUseCase = new GetProductByIdADMUseCase(ProductRepository);
    try {
      const product = await ProductUseCase.execute(id);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByNameAscADM
    */
  async getProductByNameAscADM(req: Request, res: Response) {
    const ProductRepository: IProductByNameAscADM = new UserADMRepository();
    const ProductUseCase = new GetProductByNameAscADMUseCase(ProductRepository);
    try {
      const products = await ProductUseCase.execute();
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByNameDescADM
    */
  async getProductByNameDescADM(req: Request, res: Response) {
    const ProductRepository: IProductByNameDescADM = new UserADMRepository();
    const ProductUseCase = new GetProductByNameDescADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute();
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByPriceAscADM
    */
  async getProductByPriceAscADM(req: Request, res: Response) {
    const ProductRepository: IProductByPriceAscADM = new UserADMRepository();
    const ProductUseCase = new GetProductByPriceAscADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute();
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByPriceDescADM
    */
  async getProductByPriceDescADM(req: Request, res: Response) {
    const ProductRepository: IProductByPriceDescADM = new UserADMRepository();
    const ProductUseCase = new GetProductByPriceDescADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute();
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryADM
    */
  async getProductByCategoryADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryAscADM
    */
  async getProductByCategoryAscADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryAscADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryDescADM
    */
  async getProductByCategoryDescADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryDescADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryPriceADM
    */
  async getProductByCategoryPriceADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryPriceADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryPriceAscADM
    */
  async getProductByCategoryPriceAscADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryPriceAscADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
      @getProductByCategoryPriceDescADM
    */
  async getProductByCategoryPriceDescADM(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategoryADM = new UserADMRepository();
    const ProductUseCase = new GetProductByCategoryPriceDescADMUseCase(
      ProductRepository
    );
    try {
      const products = await ProductUseCase.execute(category);
      return res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }
}
