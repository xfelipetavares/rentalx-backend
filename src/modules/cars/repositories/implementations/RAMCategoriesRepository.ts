import { Category } from "../../model/Category"
import {
  CategoriesRepositoryContract,
  ICreateCategoryDTO,
} from "../contracts/contract.CategoriesRepository"

class RAMCategoriesRepository implements CategoriesRepositoryContract {
  private categories: Category[]

  // singleton
  private static INSTANCE: RAMCategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): RAMCategoriesRepository {
    if (!RAMCategoriesRepository.INSTANCE) {
      RAMCategoriesRepository.INSTANCE = new RAMCategoriesRepository()
    }
    return RAMCategoriesRepository.INSTANCE
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { RAMCategoriesRepository }
