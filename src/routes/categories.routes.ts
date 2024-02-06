import { Router } from "express"
import { CategoriesRepository } from "../repositories/CategoriesRepository"
import { CreateCategoryService } from "../services/CreateCategory.service"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

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
