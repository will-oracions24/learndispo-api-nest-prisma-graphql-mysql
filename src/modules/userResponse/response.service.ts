import { Injectable } from '@nestjs/common';
import { UserResponse } from '@prisma/client';
import { UserResponsesRepository } from './response.repository';
import { CreateUserResponseInput } from './dto/create-response.input';
import { UpdateUserResponseInput } from './dto/update-response.input';

@Injectable()
export class UserResponsesService {
  constructor(private repository: UserResponsesRepository) {}

  public async getOne(id: string): Promise<UserResponse> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getUserResponsesArgs */): Promise<UserResponse[]> {
    return await this.repository.getMany({
      // where: { toiletId: getUserResponsesArgs.toiletId },
    });
  }

  public async create(
    createUserResponseData: CreateUserResponseInput,
  ): Promise<UserResponse> {
    const { questionId, revisionId, userId, answserId, ...rest } =
      createUserResponseData;

    const model = await this.repository.create({
      data: {
        ...rest,
        question: {
          connect: {
            id: questionId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
        selectedAnswer: {
          connect: {
            id: answserId,
          },
        },
        revisionSession: {
          connect: {
            id: revisionId,
          },
        },
      },
    });

    return model;
  }

  public async update(
    updateUserResponseData: UpdateUserResponseInput,
  ): Promise<UserResponse> {
    const { questionId, userId, answserId, ...rest } = updateUserResponseData;
    const model = await this.repository.update({
      where: { id: updateUserResponseData.id },
      data: {
        ...rest,
        question: {
          connect: {
            id: questionId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
        selectedAnswer: {
          connect: {
            id: answserId,
          },
        },
      },
    });

    return model;
  }

  public async delete(id: string): Promise<UserResponse> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
