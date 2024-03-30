import { Request, Response } from "express";
import { ProductsRepository } from "@repositories/products-repository";
import {
  GetAllProductsUseCase,
  GetProductByCategoryAscUseCase,
  GetProductByCategoryDescUseCase,
  GetProductByCategoryPriceAscUseCase,
  GetProductByCategoryPriceDescUseCase,
  GetProductByCategoryPriceUseCase,
  GetProductByCategoryUseCase,
  GetProductByIdUseCase,
  GetProductByNameAscUseCase,
  GetProductByNameDescUseCase,
  GetProductByNameUseCase,
  GetProductByPriceAscUseCase,
  GetProductByPriceDescUseCase,
} from "@usecases/products-usecase";
import {
  IProductByCategory,
  IProductByID,
  IProductByName,
  IProductByNameAsc,
  IProductByNameDesc,
  IProductByPriceAsc,
  IProductByPriceDesc,
  IProductRepository,
} from "@interfaces/product-interface";
import { ProductValidatorService } from "@services/product-validator-service";
import Errors from "@type//errors/custom-errors";
import { limit, page } from "@type//product-types";

export class ProductsController {
  private productService: ProductValidatorService;
  constructor() {
    this.productService = new ProductValidatorService();
  }

  /*
    @getAllProducts
  */
  async getAllProducts(req: Request, res: Response) {
    const { page, limit } = getPageAndLimit(req);
    const ProductRepository: IProductRepository = new ProductsRepository();
    const ProductUseCase = new GetAllProductsUseCase(ProductRepository);
    try {
      const allProducts = await ProductUseCase.execute(page, limit);
      return res.status(200).json(allProducts);
    } catch (error) {
      console.error("Error getAllProducts:", error);
      return res
        .status(Errors.INTERNAL_SERVER_ERROR.code)
        .json(Errors.INTERNAL_SERVER_ERROR);
    }
  }

  /*
    @getProductByName
  */
  async getProductByName(req: Request, res: Response) {
    const title = req.params.title;

    if (!(await this.productService.validProductName(title))) {
      return res
        .status(Errors.PRODUCT_NOT_FOUND.code)
        .json(Errors.PRODUCT_NOT_FOUND);
    }

    const ProductRepository: IProductByName = new ProductsRepository();
    const ProductUseCase = new GetProductByNameUseCase(ProductRepository);
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
    @getProductById
  */
  async getProductById(req: Request, res: Response) {
    const id = req.params.id;

    if (!(await this.productService.validProductID(id))) {
      return res.status(Errors.INVALID_ID.code).json(Errors.INVALID_ID);
    }

    const ProductRepository: IProductByID = new ProductsRepository();
    const ProductUseCase = new GetProductByIdUseCase(ProductRepository);
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
    @getProductByNameAsc
  */
  async getProductByNameAsc(req: Request, res: Response) {
    const ProductRepository: IProductByNameAsc = new ProductsRepository();
    const ProductUseCase = new GetProductByNameAscUseCase(ProductRepository);
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
    @getProductByNameDesc
  */
  async getProductByNameDesc(req: Request, res: Response) {
    const ProductRepository: IProductByNameDesc = new ProductsRepository();
    const ProductUseCase = new GetProductByNameDescUseCase(ProductRepository);
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
    @getProductByPriceAsc
  */
  async getProductByPriceAsc(req: Request, res: Response) {
    const ProductRepository: IProductByPriceAsc = new ProductsRepository();
    const ProductUseCase = new GetProductByPriceAscUseCase(ProductRepository);
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
    @getProductByPriceDesc
  */
  async getProductByPriceDesc(req: Request, res: Response) {
    const ProductRepository: IProductByPriceDesc = new ProductsRepository();
    const ProductUseCase = new GetProductByPriceDescUseCase(ProductRepository);
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
    @getProductByCategory
  */
  async getProductByCategory(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryUseCase(ProductRepository);
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
    @getProductByCategoryAsc
  */
  async getProductByCategoryAsc(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryAscUseCase(
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
    @getProductByCategoryDesc
  */
  async getProductByCategoryDesc(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryDescUseCase(
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
    @getProductByCategoryPrice
  */
  async getProductByCategoryPrice(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryPriceUseCase(
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
    @getProductByCategoryPriceAsc
  */
  async getProductByCategoryPriceAsc(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryPriceAscUseCase(
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
    @getProductByCategoryPriceDesc
  */
  async getProductByCategoryPriceDesc(req: Request, res: Response) {
    const category = req.params.category;

    if (!(await this.productService.validCategory(category))) {
      return res
        .status(Errors.CATEGORY_NOT_FOUND.code)
        .json(Errors.CATEGORY_NOT_FOUND);
    }

    const ProductRepository: IProductByCategory = new ProductsRepository();
    const ProductUseCase = new GetProductByCategoryPriceDescUseCase(
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

function getPageAndLimit(req: Request): { page: page; limit: limit } {
  const page: number =
    req.params && req.params.page ? parseInt(req.params.page) : 1;
  const limit = 40;
  return { page, limit };
}
