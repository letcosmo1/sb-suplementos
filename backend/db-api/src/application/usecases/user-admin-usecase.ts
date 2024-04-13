import {
  IProduct,
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
import { _id, available, category, title } from "@type/product-types";

export class GetAllProductsADMUseCase {
  private readonly productADMRepository: IProductADMRepository;

  constructor(productADMRepository: IProductADMRepository) {
    this.productADMRepository = productADMRepository;
  }
  async execute(): Promise<IProduct[] | null> {
    return this.productADMRepository.getAllProductsADM();
  }
}

export class PatchProductADMUseCase {
  private readonly productADMRepository: IProductADMRepository;

  constructor(productADMRepository: IProductADMRepository) {
    this.productADMRepository = productADMRepository;
  }
  async execute(_id: _id, available: available): Promise<IProduct | null> {
    return this.productADMRepository.patchProductADM(_id, available);
  }
}

export class GetProductByNameADMUseCase {
  private productRepository: IProductByNameADM;
  constructor(productRepository: IProductByNameADM) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByNameADM(title);
  }
}

export class GetProductByTitleAscADMUseCase {
  private productRepository: IProductByTitleAscADM;
  constructor(productRepository: IProductByTitleAscADM) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByTitleAscADM(title);
  }
}

export class GetProductByTitleDescADMUseCase {
  private productRepository: IProductByTitleDescADM;
  constructor(productRepository: IProductByTitleDescADM) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByTitleDescADM(title);
  }
}

export class GetProductByTitlePriceAscADMUseCase {
  private productRepository: IProductByTitlePriceAscADM;
  constructor(productRepository: IProductByTitlePriceAscADM) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByTitlePriceAscADM(title);
  }
}

export class GetProductByTitlePriceDescADMUseCase {
  private productRepository: IProductByTitlePriceDescADM;
  constructor(productRepository: IProductByTitlePriceDescADM) {
    this.productRepository = productRepository;
  }

  async execute(title: title): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByTitlePriceDescADM(title);
  }
}

export class GetProductByIdADMUseCase {
  private productRepository: IProductByIDADM;
  constructor(productRepository: IProductByIDADM) {
    this.productRepository = productRepository;
  }

  async execute(id: _id): Promise<IProduct | null> {
    return await this.productRepository.getProductByIdADM(id);
  }
}
export class GetProductByNameAscADMUseCase {
  private productRepository: IProductByNameAscADM;
  constructor(productRepository: IProductByNameAscADM) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByNameAscADM();
  }
}
export class GetProductByNameDescADMUseCase {
  private productRepository: IProductByNameDescADM;
  constructor(productRepository: IProductByNameDescADM) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByNameDescADM();
  }
}
export class GetProductByPriceAscADMUseCase {
  private productRepository: IProductByPriceAscADM;
  constructor(productRepository: IProductByPriceAscADM) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByPriceAscADM();
  }
}
export class GetProductByPriceDescADMUseCase {
  private productRepository: IProductByPriceDescADM;
  constructor(productRepository: IProductByPriceDescADM) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByPriceDescADM();
  }
}
export class GetProductByCategoryADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryADM(category);
  }
}

export class GetProductByCategoryAscADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryAscADM(category);
  }
}

export class GetProductByCategoryDescADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryDescADM(category);
  }
}

export class GetProductByCategoryPriceAscADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPriceAscADM(
      category
    );
  }
}

export class GetProductByCategoryPriceADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPriceADM(category);
  }
}

export class GetProductByCategoryPriceDescADMUseCase {
  private productRepository: IProductByCategoryADM;
  constructor(productRepository: IProductByCategoryADM) {
    this.productRepository = productRepository;
  }

  async execute(category: category): Promise<IProduct[] | null> {
    return await this.productRepository.getProductByCategoryPriceDescADM(
      category
    );
  }
}
