import { CategoriesRepositoryContract } from "../../repositories/contracts/contract.CategoriesRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("PostgresCategoriesRepository")
    private categoriesRepository: CategoriesRepositoryContract
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
    
    if (categoryAlreadyExists) {
      throw new Error("Category already exists.")
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
