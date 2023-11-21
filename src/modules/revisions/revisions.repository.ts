import { Injectable } from '@nestjs/common';
import { Prisma, RevisionSession } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class RevisionSessionsRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.RevisionSessionWhereUniqueInput;
  }): Promise<RevisionSession> {
    const { where } = params;
    return this.prisma.revisionSession.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RevisionSessionWhereUniqueInput;
    where?: Prisma.RevisionSessionWhereInput;
    orderBy?: Prisma.RevisionSessionOrderByWithRelationInput;
  }): Promise<RevisionSession[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.revisionSession.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.RevisionSessionCreateInput;
  }): Promise<RevisionSession> {
    const { data } = params;
    return this.prisma.revisionSession.create({ data });
  }

  async update(params: {
    where: Prisma.RevisionSessionWhereUniqueInput;
    data: Prisma.RevisionSessionUpdateInput;
  }): Promise<RevisionSession> {
    const { where, data } = params;
    return this.prisma.revisionSession.update({ where, data });
  }

  async delete(params: {
    where: Prisma.RevisionSessionWhereUniqueInput;
  }): Promise<RevisionSession> {
    const { where } = params;
    return this.prisma.revisionSession.delete({ where });
  }
}
