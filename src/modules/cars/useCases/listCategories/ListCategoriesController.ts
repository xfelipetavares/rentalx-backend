import { Request, Response } from "express"
import { ListCategoryUseCase } from "./ListCategoriesUseCase"
import { container } from "tsyringe"

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase)

    const result = await listCategoryUseCase.execute()

    return response.json(result)
  }
}

export { ListCategoriesController }
