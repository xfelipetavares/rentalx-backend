import { Category } from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./CategoriesRepository.contract"

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log("postgres create", name, description)
    return null
    throw new Error("Method not implemented.")
  }

  list(): Category[] {
    console.log("list category")
    return null
    throw new Error("Method not implemented.")
  }

  findByName(name: string): Category {
    console.log("postgres found", name)
    return null
    throw new Error("Method not implemented.")
  }
}

export { PostgresCategoriesRepository }
