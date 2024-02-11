import { Specification } from "../model/Specification"
import {
  ICreateSpecificationDTO,
  SpecificationsRepositoryContract,
} from "./contract.SpecificationsRepository"

class RAMSpecificationRepository implements SpecificationsRepositoryContract {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
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
}

export { RAMSpecificationRepository }
