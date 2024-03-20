interface ICreateUserDTO {
  name: string
  email: string
  password: string
  driver_license: string
}

interface IUserDataDTO {
  id: string
  email: string
  name: string
  password: string
  driver_license: string
}

interface ContractUsersRepository {
  create(userData: ICreateUserDTO): Promise<void>
  findByEmail(userEmail: string): Promise<IUserDataDTO>
  findById(userId: string): Promise<IUserDataDTO>
}

export { ContractUsersRepository, ICreateUserDTO, IUserDataDTO }
