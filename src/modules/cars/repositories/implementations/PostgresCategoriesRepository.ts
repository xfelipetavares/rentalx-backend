import { Repository, getRepository } from "typeorm"
import { Category } from "../../entities/Category"
import {
  CategoriesRepositoryContract,
  ICreateCategoryDTO,
} from "../contracts/contract.CategoriesRepository"

class PostgresCategoriesRepository implements CategoriesRepositoryContract {
  constructor(private repository: Repository<Category> = getRepository(Category)) {}

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name })
    return category
  }
}

export { PostgresCategoriesRepository }
