import { Router } from "express"
import { RAMCategoriesRepository } from "../modules/cars/repositories/RAMCategoriesRepository"
import { CreateCategoryService } from "../modules/cars/services/CreateCategory.service"
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new RAMCategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ description, name })

  return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
  const result = categoriesRepository.list()

  return response.json(result)
})

export { categoriesRoutes }
