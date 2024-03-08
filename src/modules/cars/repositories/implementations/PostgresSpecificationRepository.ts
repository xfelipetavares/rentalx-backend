import { ILike, Repository, getRepository } from "typeorm"
import { Specification } from "../../entities/Specification"
import {
  ICreateSpecificationDTO,
  SpecificationsRepositoryContract,
} from "../contracts/contract.SpecificationsRepository"

class PostgresSpecificationRepository implements SpecificationsRepositoryContract {
  constructor(private repository: Repository<Specification> = getRepository(Specification)) {}

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
      created_at: new Date(),
    })

    await this.repository.save(specification)
  }

  async listSpecifications(): Promise<Specification[]> {
    const result = await this.repository.find()
    return result
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name: ILike(name) } })
    return specification
  }
}

export { PostgresSpecificationRepository }
