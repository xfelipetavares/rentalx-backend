import { Router } from "express"
import createCategoryController from "../modules/cars/useCases/createCategory"
import listCategoryController from "../modules/cars/useCases/listCategories"
import multer from "multer"
import importCategoriesController from "../modules/cars/useCases/importCategories"

const categoriesRoutes = Router()
const upload = multer({
  dest: "./tmp",
})

categoriesRoutes.post("/", async (request, response) => {
  return await createCategoryController().handle(request, response)
})

categoriesRoutes.get("/", async (request, response) => {
  return await listCategoryController().handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController().handle(request, response)
})

export { categoriesRoutes }
