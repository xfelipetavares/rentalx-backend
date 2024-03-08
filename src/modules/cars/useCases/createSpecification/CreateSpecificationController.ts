import { Request, Response } from "express"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"
import { container } from "tsyringe"

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    const specificationUseCase = container.resolve(CreateSpecificationUseCase)

    await specificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateSpecificationController }
