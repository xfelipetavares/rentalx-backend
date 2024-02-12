import { Router } from "express"

import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase"
import { RAMSpecificationRepository } from "../modules/cars/repositories/implementations/RAMSpecificationRepository"

const specificationsRoutes = Router()
const specificationRepository = new RAMSpecificationRepository()

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationUseCase(specificationRepository)

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

export { specificationsRoutes }
