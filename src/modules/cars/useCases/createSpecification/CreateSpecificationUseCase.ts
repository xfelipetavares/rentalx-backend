import { inject, injectable } from "tsyringe"
import { SpecificationsRepositoryContract } from "../../repositories/contracts/contract.SpecificationsRepository"
import { AppError } from "../../../../errors/appError"

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
      throw new AppError("Specification already exists.")
    }

    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
