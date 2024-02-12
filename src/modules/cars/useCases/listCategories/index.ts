import { RAMCategoriesRepository } from "../../repositories/implementations/RAMCategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoryUseCase } from "./ListCategoriesUseCase"

const categoriesRepository = RAMCategoriesRepository.getInstance()
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
const listCategoryController = new ListCategoriesController(listCategoryUseCase)

export { listCategoryController }
