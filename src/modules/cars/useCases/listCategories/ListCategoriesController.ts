import { Request, Response } from "express"
import { ListCategoryUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.listCategoryUseCase.execute()

    return response.json(result)
  }
}

export { ListCategoriesController }
