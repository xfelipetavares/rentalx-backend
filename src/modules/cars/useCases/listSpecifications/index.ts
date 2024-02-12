import { RAMSpecificationRepository } from "../../repositories/implementations/RAMSpecificationRepository"
import { ListSpecificationsController } from "./ListCategoriesController"
import { ListSpecificationsUseCase } from "./ListCategoriesUseCase"

const specificationRepository = RAMSpecificationRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export { listSpecificationsController }
