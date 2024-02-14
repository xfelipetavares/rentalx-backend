import { RAMCategoriesRepository } from "../../repositories/implementations/RAMCategoriesRepository"
import { ImportCategoriesController } from "./ImportCategoriesController"
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase"

const categoriesRepository = RAMCategoriesRepository.getInstance()
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)

export { importCategoriesController }
