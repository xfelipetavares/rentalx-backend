import { Repository, getRepository } from "typeorm"
import { ContractUsersRepository, ICreateUserDTO } from "../contracts/ContractUsersRepository"
import { User } from "../../entities/User"

class UsersRepository implements ContractUsersRepository {
  constructor(private repository: Repository<User> = getRepository(User)) {}
  async findByEmail(email: string): Promise<User> {
    const result = await this.repository.findOne({ email })
    return result
  }

  async create({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
      created_at: new Date(),
    })
    await this.repository.save(user)
  }
}

export { UsersRepository }
