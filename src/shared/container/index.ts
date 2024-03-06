import { container } from "tsyringe"
import { CategoriesRepositoryContract } from "../../modules/cars/repositories/contracts/contract.CategoriesRepository"
import { PostgresCategoriesRepository } from "../../modules/cars/repositories/implementations/PostgresCategoriesRepository"

container.registerSingleton<CategoriesRepositoryContract>(
  "PostgresCategoriesRepository",
  PostgresCategoriesRepository
)
