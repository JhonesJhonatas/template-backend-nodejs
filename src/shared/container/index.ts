import { IUserRepository } from '@/modules/user/repositories/IUserRepository'
import { UserRepository } from '@/modules/user/repositories/implementations/UserRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
