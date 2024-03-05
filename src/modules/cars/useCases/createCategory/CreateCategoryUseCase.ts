import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"

interface IRequest {
  name: string
  description: string
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryContract) {}

  async execute({ name, description }: IRequest): Promise<void> {
    console.log("caiu aqui")

    if (await this.categoriesRepository.findByName(name)) {
      throw new Error("Category already exists.")
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
