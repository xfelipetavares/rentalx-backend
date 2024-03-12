import { User } from "../../entities/User"

interface ICreateUserDTO {
  name: string
  email: string
  password: string
  driver_license: string
}

interface ContractUsersRepository {
  create(userData: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User>
}

export { ContractUsersRepository, ICreateUserDTO }
