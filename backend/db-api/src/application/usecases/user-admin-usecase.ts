import { IProductADMRepository } from "@interfaces/product-admin-interface";
import { IProduct } from "@interfaces/product-interface";

export class GetAllProductsADMUseCase {
  private readonly productADMRepository: IProductADMRepository;

  constructor(productADMRepository: IProductADMRepository) {
    this.productADMRepository = productADMRepository;
  }
  async execute(): Promise<IProduct[] | null> {
    return this.productADMRepository.getAllProductsADM();
  }
}
