import { inject, injectable } from "tsyringe"
import { SpecificationsRepositoryContract } from "../../repositories/contracts/contract.SpecificationsRepository"

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("PostgresSpecificationRepository")
    private specificationsRepository: SpecificationsRepositoryContract
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists.")
    }

    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
