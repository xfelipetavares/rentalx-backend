import { inject, injectable } from "tsyringe"
import { Category } from "../../entities/Category"
import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("PostgresCategoriesRepository")
    private categoriesRepository: CategoriesRepositoryContract
  ) {}

  async execute(): Promise<Category[]> {
    const result = await this.categoriesRepository.list()
    return result
  }
}

export { ListCategoryUseCase }
