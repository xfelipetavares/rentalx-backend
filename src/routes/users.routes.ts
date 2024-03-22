import { Router } from "express"
import multer from "multer"
import uploadConfig from "../config/upload"
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const userRouter = Router()
const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

userRouter.post("/", createUserController.handle)
userRouter.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
)

export { userRouter }
