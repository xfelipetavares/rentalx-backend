import { PostgresCategoriesRepository } from "../../repositories/implementations/PostgresCategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoryUseCase } from "./ListCategoriesUseCase"

export default () => {
  const categoriesRepository = new PostgresCategoriesRepository()
  const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository)
  const listCategoryController = new ListCategoriesController(listCategoryUseCase)

  return listCategoryController
}
