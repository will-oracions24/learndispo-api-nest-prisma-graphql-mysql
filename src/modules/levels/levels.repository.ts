import { Injectable } from '@nestjs/common';
import { Prisma, Level } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class LevelRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.LevelWhereUniqueInput;
  }): Promise<Level> {
    const { where } = params;
    return this.prisma.level.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LevelWhereUniqueInput;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput;
  }): Promise<Level[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.level.findMany({ skip, take, cursor, where, orderBy });
  }

  async create(params: { data: Prisma.LevelCreateInput }): Promise<Level> {
    const { data } = params;
    return this.prisma.level.create({ data });
  }

  async update(params: {
    where: Prisma.LevelWhereUniqueInput;
    data: Prisma.LevelUpdateInput;
  }): Promise<Level> {
    const { where, data } = params;
    return this.prisma.level.update({ where, data });
  }

  async delete(params: {
    where: Prisma.LevelWhereUniqueInput;
  }): Promise<Level> {
    const { where } = params;
    return this.prisma.level.delete({ where });
  }
}
