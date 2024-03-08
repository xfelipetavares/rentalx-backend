import { Specification } from "../../entities/Specification"

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface SpecificationsRepositoryContract {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>
  findByName(name: string): Promise<Specification>
  listSpecifications(): Promise<Specification[]>
}

export { SpecificationsRepositoryContract, ICreateSpecificationDTO }
