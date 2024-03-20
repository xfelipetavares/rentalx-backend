import { inject, injectable } from "tsyringe"
import {
  ContractUsersRepository,
  ICreateUserDTO,
} from "../../repositories/contracts/ContractUsersRepository"
import { hash } from "bcrypt"
import { AppError } from "../../../../errors/appError"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: ContractUsersRepository
  ) {}

  async execute(userData: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email)
    if (userAlreadyExists) {
      throw new AppError("User's email already registered.", 401)
    }
    const passwordHash = await hash(userData.password, 8)
    await this.usersRepository.create({ ...userData, password: passwordHash })
  }
}

export { CreateUserUseCase }
