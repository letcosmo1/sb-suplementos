import { IProductADMRepository } from "@interfaces/product-admin-interface";
import { IProduct } from "@interfaces/product-interface";
import { _id, available } from "@type/product-types";

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
  async execute(_uid: _id, available: available): Promise<IProduct | null> {
    return this.productADMRepository.patchProductADM(_uid, available);
  }
}
