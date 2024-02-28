import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from "@/prisma";

class UserRepository implements IUserRepository {
  async create({
    name,
    email,
  }: ICreateUserDTO): Promise<User> {
    const createdUser = await prismaClient.user.create({
     data:{
      name,
      email
     }
    })

    return createdUser
  }
}

export {
  UserRepository
}