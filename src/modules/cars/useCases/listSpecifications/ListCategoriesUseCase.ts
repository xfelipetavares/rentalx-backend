import { Specification } from "../../model/Specification"
import { SpecificationsRepositoryContract } from "../../repositories/contracts/contract.SpecificationsRepository"

class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationsRepositoryContract) {}

  execute(): Specification[] {
    const result = this.specificationRepository.listSpecifications()
    return result
  }
}

export { ListSpecificationsUseCase }
