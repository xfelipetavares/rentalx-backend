import { Repository, getRepository } from "typeorm"
import { ContractUsersRepository, ICreateUserDTO } from "../contracts/ContractUsersRepository"
import { User } from "../../entities/User"

class UsersRepository implements ContractUsersRepository {
  constructor(private repository: Repository<User> = getRepository(User)) {}

  async create({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
      created_at: new Date(),
    })
    await this.repository.save(user)
  }
}

export { UsersRepository }
