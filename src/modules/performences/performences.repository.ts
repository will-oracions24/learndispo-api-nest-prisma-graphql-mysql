import { Injectable } from '@nestjs/common';
import { Prisma, Performance } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class PerformancesRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.PerformanceWhereUniqueInput;
  }): Promise<Performance> {
    const { where } = params;
    return this.prisma.performance.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PerformanceWhereUniqueInput;
    where?: Prisma.PerformanceWhereInput;
    orderBy?: Prisma.PerformanceOrderByWithRelationInput;
  }): Promise<Performance[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.performance.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.PerformanceCreateInput;
  }): Promise<Performance> {
    const { data } = params;
    return this.prisma.performance.create({ data });
  }

  async update(params: {
    where: Prisma.PerformanceWhereUniqueInput;
    data: Prisma.PerformanceUpdateInput;
  }): Promise<Performance> {
    const { where, data } = params;
    return this.prisma.performance.update({ where, data });
  }

  async delete(params: {
    where: Prisma.PerformanceWhereUniqueInput;
  }): Promise<Performance> {
    const { where } = params;
    return this.prisma.performance.delete({ where });
  }
}
