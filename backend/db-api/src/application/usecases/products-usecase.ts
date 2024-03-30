import {
  IProduct,
  IProductByCategory,
  IProductByID,
  IProductByName,
  IProductByNameAsc,
  IProductByNameDesc,
  IProductByPriceAsc,
  IProductByPriceDesc,
  IProductRepository,
} from "@interfaces/product-interface";
import { _id, category, limit, page, title } from "@type//product-types";

export class GetAllProductsUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(page: page, limit: limit): Promise<IProduct[] | null> {
    return await this.productRepository.getAllProducts(page, limit);
  }
}

export class GetProductByNameUseCase {
  private productRepository: IProductByName;
  constructor(productRepository: IProductByName) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByName(title);
  }
}

export class GetProductByIdUseCase {
  private productRepository: IProductByID;
  constructor(productRepository: IProductByID) {
    this.productRepository = productRepository;
  }

  async execute(id: _id): Promise<IProduct | null> {
    return await this.productRepository.getProductById(id);
  }
}
export class GetProductByNameAscUseCase {
  private productRepository: IProductByNameAsc;
  constructor(productRepository: IProductByNameAsc) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByNameAsc();
  }
}
export class GetProductByNameDescUseCase {
  private productRepository: IProductByNameDesc;
  constructor(productRepository: IProductByNameDesc) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByNameDesc();
  }
}
export class GetProductByPriceAscUseCase {
  private productRepository: IProductByPriceAsc;
  constructor(productRepository: IProductByPriceAsc) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByPriceAsc();
  }
}
export class GetProductByPriceDescUseCase {
  private productRepository: IProductByPriceDesc;
  constructor(productRepository: IProductByPriceDesc) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByPriceDesc();
  }
}
export class GetProductByCategoryUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategory(category);
  }
}

export class GetProductByCategoryAscUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryAsc(category);
  }
}

export class GetProductByCategoryDescUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryDesc(category);
  }
}

export class GetProductByCategoryPriceAscUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPriceAsc(category);
  }
}


export class GetProductByCategoryPriceUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPrice(category);
  }
}

export class GetProductByCategoryPriceDescUseCase {
  private productRepository: IProductByCategory;
  constructor(productRepository: IProductByCategory) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPriceDesc(category);
  }
}
