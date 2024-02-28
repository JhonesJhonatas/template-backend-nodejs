import { CreateUserController } from '@/modules/user/useCases/createUser/createUserController'
import { Router } from 'express'

const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post('/create-user', createUserController.handle)

export { userRoutes }
