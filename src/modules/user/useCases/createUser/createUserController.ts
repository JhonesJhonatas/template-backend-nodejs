import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase'

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const createdUser = await createUserUseCase.execute({
      name,
      email,
    })

    return response.status(200).json(createdUser)
  }
}

export { CreateUserController }
