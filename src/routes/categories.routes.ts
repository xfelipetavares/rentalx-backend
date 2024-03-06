import { Router } from "express"
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController"
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController"
import multer from "multer"
import importCategoriesController from "../modules/cars/useCases/importCategories"

const categoriesRoutes = Router()
const upload = multer({
  dest: "./tmp",
})
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoriesController()

categoriesRoutes.post("/", createCategoryController.handle)
categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController().handle(request, response)
})

export { categoriesRoutes }
