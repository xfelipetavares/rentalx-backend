import { Request, Response } from "express"
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase"
import { container } from "tsyringe"

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const result = await listSpecificationsUseCase.execute()

    return response.json(result)
  }
}

export { ListSpecificationsController }
