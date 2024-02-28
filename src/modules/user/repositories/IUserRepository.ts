import { User } from "@prisma/client"
import { ICreateUserDTO } from "../dto/ICreateUserDTO"

interface IUserRepository {
  create({ name, email }: ICreateUserDTO): Promise<User>
}

export {
  IUserRepository
}