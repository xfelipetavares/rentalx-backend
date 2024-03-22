import { inject, injectable } from "tsyringe"
import { ContractUsersRepository } from "../../repositories/contracts/ContractUsersRepository"
import { deleteFile } from "../../../../utils/file"

interface IRequest {
  user_id: string
  avatar_file: string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private repository: ContractUsersRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.repository.findById(user_id)

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }
    user.avatar = avatar_file

    await this.repository.create(user)
  }
}

export { UpdateUserAvatarUseCase }

// adicionar coluna avatar na tabela de users
// configurar upload multer
// refatorar usuário com coluna avatar
// criar a regra de negocio do upload
// criar controller
