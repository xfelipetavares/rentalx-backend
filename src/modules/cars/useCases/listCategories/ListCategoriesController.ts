import { Request, Response } from "express"
import { ListCategoryUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const result = this.listCategoryUseCase.execute()

    return response.json(result)
  }
}

export { ListCategoriesController }
