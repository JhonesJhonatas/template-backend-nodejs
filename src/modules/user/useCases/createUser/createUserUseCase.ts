import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '@/modules/user/repositories/IUserRepository'
import { ICreateUserDTO } from '@/modules/user/dto/ICreateUserDTO'
import { AppError } from '@/errors/AppError'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ name, email }: ICreateUserDTO) {
    const createdUser = await this.userRepository.create({
      name,
      email,
    })

    if (!createdUser) {
      throw new AppError('Erro ao cadastrar usuário', 400)
    }

    return createdUser
  }
}

export { CreateUserUseCase }
