import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository"
import { AppError } from "../errors/appError"

interface IPayLoad {
  sub: string
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token Missing", 401)
  }

  try {
    const [, token] = authHeader.split(" ")
    const { sub: userId } = verify(token, "dorinha") as IPayLoad

    const userRepository = new UsersRepository()
    const user = await userRepository.findById(userId)

    if (!user) {
      throw new AppError("User doesn't exist.", 401)
    }

    console.log(user)
    // next()
    return response.send("authenticated")
  } catch (error) {
    throw new AppError("Invalid token.", 401)
  }
}

export { ensureAuthenticated }
