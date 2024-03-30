import {
  ICategoryHL,
  ICategoryHLRepository,
} from "@interfaces/categoryHL-interface";

export class GetAllHLCategoriesUseCase {
  private categoryRepository: ICategoryHLRepository;

  constructor(categoryRepository: ICategoryHLRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(): Promise<ICategoryHL[] | null> {
    return await this.categoryRepository.getAllCategoriesHL();
  }
}
