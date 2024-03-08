import { inject, injectable } from "tsyringe"
import { Specification } from "../../entities/Specification"
import { SpecificationsRepositoryContract } from "../../repositories/contracts/contract.SpecificationsRepository"

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("PostgresSpecificationRepository")
    private specificationRepository: SpecificationsRepositoryContract
  ) {}

  async execute(): Promise<Specification[]> {
    const result = await this.specificationRepository.listSpecifications()
    return result
  }
}

export { ListSpecificationsUseCase }
