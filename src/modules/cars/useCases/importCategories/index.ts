import { PostgresCategoriesRepository } from "../../repositories/implementations/PostgresCategoriesRepository"
import { ImportCategoriesController } from "./ImportCategoriesController"
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase"

export default () => {
  const categoriesRepository = new PostgresCategoriesRepository()
  const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
  const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)

  return importCategoriesController
}
