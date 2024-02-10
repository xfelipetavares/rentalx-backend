import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  private categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({ name, description }: IRequest): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error("Category already exists.")
    }

    this.categoriesRepository.create({ name, description })
    return
  }
}

export { CreateCategoryService }
