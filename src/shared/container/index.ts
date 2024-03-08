import { container } from "tsyringe"
import { CategoriesRepositoryContract } from "../../modules/cars/repositories/contracts/contract.CategoriesRepository"
import { PostgresCategoriesRepository } from "../../modules/cars/repositories/implementations/PostgresCategoriesRepository"
import { SpecificationsRepositoryContract } from "../../modules/cars/repositories/contracts/contract.SpecificationsRepository"
import { PostgresSpecificationRepository } from "../../modules/cars/repositories/implementations/PostgresSpecificationRepository"

container.registerSingleton<CategoriesRepositoryContract>(
  "PostgresCategoriesRepository",
  PostgresCategoriesRepository
)

container.registerSingleton<SpecificationsRepositoryContract>(
  "PostgresSpecificationRepository",
  PostgresSpecificationRepository
)
