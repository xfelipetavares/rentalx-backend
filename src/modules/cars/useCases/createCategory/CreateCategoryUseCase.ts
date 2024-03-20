import { AppError } from "../../../../errors/appError"
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
      throw new AppError("Category already exists.", 401)
    }

    await this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
