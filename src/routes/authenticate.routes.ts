import { Router } from "express"
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController"

const authenticateRoutes = Router()
const authUserController = new AuthenticateUserController()

authenticateRoutes.post("/", authUserController.handle)

export { authenticateRoutes }
