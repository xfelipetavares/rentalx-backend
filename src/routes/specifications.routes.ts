import { Router } from "express"
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecification.service"
import { RAMSpecificationRepository } from "../modules/cars/repositories/RAMSpecificationRepository"

const specificationsRoutes = Router()
const specificationRepository = new RAMSpecificationRepository()

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(specificationRepository)

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

export { specificationsRoutes }
