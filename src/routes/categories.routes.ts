import { Router } from "express"
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController"
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController"
import multer from "multer"
import { ImportCategoriesController } from "../modules/cars/useCases/importCategories/ImportCategoriesController"

const categoriesRoutes = Router()
const upload = multer({
  dest: "./tmp",
})
const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoriesController()
const importCategoriesController = new ImportCategoriesController()

categoriesRoutes.post("/", createCategoryController.handle)
categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoriesController.handle)

export { categoriesRoutes }
