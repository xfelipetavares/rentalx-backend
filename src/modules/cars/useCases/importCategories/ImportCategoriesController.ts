import { Request, Response } from "express"
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase"
import { container } from "tsyringe"

class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request
    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)
    await importCategoriesUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoriesController }
