import { container } from "tsyringe"
import { ContractUsersRepository } from "../../modules/accounts/repositories/contracts/ContractUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { CategoriesRepositoryContract } from "../../modules/cars/repositories/contracts/contract.CategoriesRepository"
import { SpecificationsRepositoryContract } from "../../modules/cars/repositories/contracts/contract.SpecificationsRepository"
import { PostgresCategoriesRepository } from "../../modules/cars/repositories/implementations/PostgresCategoriesRepository"
import { PostgresSpecificationRepository } from "../../modules/cars/repositories/implementations/PostgresSpecificationRepository"

container.registerSingleton<ContractUsersRepository>("UsersRepository", UsersRepository)

container.registerSingleton<CategoriesRepositoryContract>(
  "PostgresCategoriesRepository",
  PostgresCategoriesRepository
)

container.registerSingleton<SpecificationsRepositoryContract>(
  "PostgresSpecificationRepository",
  PostgresSpecificationRepository
)
