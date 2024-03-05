import { Category } from "../../entities/Category"
import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryContract) {}

  async execute(): Promise<Category[]> {
    const result = await this.categoriesRepository.list()
    return result
  }
}

export { ListCategoryUseCase }
