interface ICreateUserDTO {
  name: string
  username: string
  email: string
  password: string
  driver_license: string
}

interface ContractUsersRepository {
  create(userData: ICreateUserDTO): Promise<void>
}

export { ContractUsersRepository, ICreateUserDTO }
