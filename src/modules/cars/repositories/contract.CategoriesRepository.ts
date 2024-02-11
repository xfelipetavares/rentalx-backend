import { Category } from "../model/Category"

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface CategoriesRepositoryContract {
  create({ name, description }: ICreateCategoryDTO): void
  list(): Category[]
  findByName(name: string): Category
}

export { CategoriesRepositoryContract, ICreateCategoryDTO }
