import { User } from "../../entities/User"

interface ICreateUserDTO {
  id?: string
  name: string
  email: string
  password: string
  driver_license: string
  avatar?: string
}

interface IUserDataDTO {
  email: string
  name: string
  password: string
  driver_license: string
}

interface ContractUsersRepository {
  create(userData: ICreateUserDTO): Promise<void>
  findByEmail(userEmail: string): Promise<User>
  findById(userId: string): Promise<User>
}

export { ContractUsersRepository, ICreateUserDTO, IUserDataDTO }
