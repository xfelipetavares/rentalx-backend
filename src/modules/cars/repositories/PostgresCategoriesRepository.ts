import { Category } from "../model/Category"
import { CategoriesRepositoryContract, ICreateCategoryDTO } from "./contract.CategoriesRepository"

class PostgresCategoriesRepository implements CategoriesRepositoryContract {
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
