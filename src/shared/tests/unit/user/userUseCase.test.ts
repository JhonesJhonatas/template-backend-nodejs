import { AppError } from '@/errors/AppError'
import { InMemoryUserRepository } from '@/modules/user/repositories/implementations/InMemoryUserRepository'
import { CreateUserUseCase } from '@/modules/user/useCases/createUser/createUserUseCase'

let createUserUseCase: CreateUserUseCase

describe('Users UseCases', () => {
  beforeEach(() => {
    const userRepository = new InMemoryUserRepository()

    createUserUseCase = new CreateUserUseCase(userRepository)
  })

  it('should be able to create user', async () => {
    const body = {
      name: 'New User',
      email: 'newUser@email.com',
    }

    const createdUser = await createUserUseCase.execute(body)

    expect(createdUser.id).toMatch(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
    )
    expect(createdUser.name).toEqual(body.name)
    expect(createdUser.email).toEqual(body.email)
  })

  it('should not be able to create user with same email', async () => {
    const body = {
      name: 'New User',
      email: 'newUser@email.com',
    }

    await createUserUseCase.execute(body)

    await expect(createUserUseCase.execute(body)).rejects.toBeInstanceOf(
      AppError,
    )
  })
})
