import { Injectable } from '@nestjs/common';
import { Prisma, UserResponse } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class UserResponsesRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.UserResponseWhereUniqueInput;
  }): Promise<UserResponse> {
    const { where } = params;
    return this.prisma.userResponse.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserResponseWhereUniqueInput;
    where?: Prisma.UserResponseWhereInput;
    orderBy?: Prisma.UserResponseOrderByWithRelationInput;
  }): Promise<UserResponse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.userResponse.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.UserResponseCreateInput;
  }): Promise<UserResponse> {
    const { data } = params;
    return this.prisma.userResponse.create({ data });
  }

  async update(params: {
    where: Prisma.UserResponseWhereUniqueInput;
    data: Prisma.UserResponseUpdateInput;
  }): Promise<UserResponse> {
    const { where, data } = params;
    return this.prisma.userResponse.update({ where, data });
  }

  async delete(params: {
    where: Prisma.UserResponseWhereUniqueInput;
  }): Promise<UserResponse> {
    const { where } = params;
    return this.prisma.userResponse.delete({ where });
  }
}
