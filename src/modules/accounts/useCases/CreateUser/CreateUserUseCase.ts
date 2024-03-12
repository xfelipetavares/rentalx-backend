import { inject, injectable } from "tsyringe"
import {
  ContractUsersRepository,
  ICreateUserDTO,
} from "../../repositories/contracts/ContractUsersRepository"
import { hash } from "bcrypt"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: ContractUsersRepository
  ) {}

  async execute(userData: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email)
    if (userAlreadyExists) {
      throw new Error("User's email already registered.")
    }
    const passwordHash = await hash(userData.password, 8)
    await this.usersRepository.create({ ...userData, password: passwordHash })
  }
}

export { CreateUserUseCase }
