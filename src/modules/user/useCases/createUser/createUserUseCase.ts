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
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('Email already registered', 400)
    }

    const createdUser = await this.userRepository.create({
      name,
      email,
    })

    return createdUser
  }
}

export { CreateUserUseCase }
