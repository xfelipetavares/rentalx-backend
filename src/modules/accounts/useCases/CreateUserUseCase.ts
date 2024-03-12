import { inject, injectable } from "tsyringe"
import {
  ContractUsersRepository,
  ICreateUserDTO,
} from "../repositories/contracts/ContractUsersRepository"

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: ContractUsersRepository
  ) {}

  async execute(userData: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(userData)
  }
}

export { CreateUserUseCase }
