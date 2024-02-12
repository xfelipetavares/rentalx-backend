import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryContract) {}

  execute({ name, description }: IRequest): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error("Category already exists.")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }