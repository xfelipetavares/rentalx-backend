import { container } from "tsyringe"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { Request, Response } from "express"

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body
    const authenticateUseCase = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUseCase.execute({ email, password })

    return response.status(200).json(token)
  }
}

export { AuthenticateUserController }
