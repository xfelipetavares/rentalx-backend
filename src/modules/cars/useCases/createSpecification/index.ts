import { RAMSpecificationRepository } from "../../repositories/implementations/RAMSpecificationRepository"
import { CreateSpecificationController } from "./CreateSpecificationController"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

const specificationRepository = RAMSpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }
