import { randomUUID } from 'node:crypto'

import { User } from '@prisma/client'
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'
import { IUserRepository } from '../IUserRepository'

class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const userToCreate = {
      id: randomUUID(),
      name,
      email,
    }

    this.users.push(userToCreate)

    return userToCreate
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => {
      return user.email === email
    })

    return user || null
  }
}

export { InMemoryUserRepository }
