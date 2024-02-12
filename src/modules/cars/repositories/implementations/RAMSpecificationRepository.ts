import { Specification } from "../../model/Specification"
import {
  ICreateSpecificationDTO,
  SpecificationsRepositoryContract,
} from "../contracts/contract.SpecificationsRepository"

class RAMSpecificationRepository implements SpecificationsRepositoryContract {
  private specifications: Specification[]

  private static INSTANCE: RAMSpecificationRepository

  private constructor() {
    this.specifications = []
  }

  listSpecifications(): Specification[] {
    return this.specifications
  }

  public static getInstance(): RAMSpecificationRepository {
    if (!RAMSpecificationRepository.INSTANCE) {
      RAMSpecificationRepository.INSTANCE = new RAMSpecificationRepository()
    }
    return RAMSpecificationRepository.INSTANCE
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((spec) => spec.name === name)

    return specification
  }
}

export { RAMSpecificationRepository }
