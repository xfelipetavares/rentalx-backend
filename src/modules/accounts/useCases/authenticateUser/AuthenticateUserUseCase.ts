import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { ContractUsersRepository } from "../../repositories/contracts/ContractUsersRepository"
import { response } from "express"

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: ContractUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    try {
      const user = await this.userRepository.findByEmail(email)
      const passwordMatch = await compare(password, user.password)

      if (!user || !passwordMatch) {
        throw new Error("Email or password incorrect!")
      }

      const token = sign({}, "dorinha", {
        subject: user.id,
        expiresIn: "1d",
      })

      return {
        user: {
          name: user.name,
          email: user.email,
        },
        token,
      }
    } catch (error) {
      return error.message
    }
  }
}

export { AuthenticateUserUseCase }
