import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { ContractUsersRepository } from "../../repositories/contracts/ContractUsersRepository"
import { AppError } from "../../../../errors/appError"

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
    const user = await this.userRepository.findByEmail(email)

    if (!user) throw new AppError("User doesn't exist.", 401)

    const passwordMatch = await compare(password, user.password)

    if (!user || !passwordMatch) {
      throw new AppError("Email or password incorrect!", 401)
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
  }
}

export { AuthenticateUserUseCase }
