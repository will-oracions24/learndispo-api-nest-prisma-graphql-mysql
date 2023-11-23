import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './users.repository';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository) {}

  public async getOne(id: string): Promise<User> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getUsersArgs */): Promise<User[]> {
    return await this.repository.getMany({
      // where: { toiletId: getUsersArgs.toiletId },
    });
  }

  public async create(createUserData: CreateUserInput): Promise<User> {
    const user = await this.repository.create({
      data: {
        ...createUserData,
      },
    });

    return user;
  }

  public async update(updateUserData: UpdateUserInput): Promise<User> {
    const user = await this.repository.update({
      where: { id: updateUserData.id },
      data: updateUserData,
    });

    return user;
  }

  public async delete(id: string): Promise<User> {
    const user = await this.repository.delete({
      where: { id },
    });

    return user;
  }
}
