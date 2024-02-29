import { Category } from "../../entities/Category"
import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryContract) {}

  execute(): Category[] {
    const result = this.categoriesRepository.list()
    return result
  }
}

export { ListCategoryUseCase }
