import { ICategoriesRepository } from "../repositories/CategoriesRepository.contract"

interface IRequest {
  name: string
  description: string
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error("Category already exists.")
    }

    this.categoriesRepository.create({ name, description })
    return
  }
}

export { CreateCategoryService }
