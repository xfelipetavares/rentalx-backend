import { Specification } from "../../model/Specification"

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface SpecificationsRepositoryContract {
  create({ description, name }: ICreateSpecificationDTO): void
  findByName(name: string): Specification
  listSpecifications(): Specification[]
}

export { SpecificationsRepositoryContract, ICreateSpecificationDTO }
