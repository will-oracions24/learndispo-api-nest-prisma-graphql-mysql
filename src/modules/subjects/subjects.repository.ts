import { Injectable } from '@nestjs/common';
import { Prisma, Subject } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class SubjectRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.SubjectWhereUniqueInput;
  }): Promise<Subject> {
    const { where } = params;
    return this.prisma.subject.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubjectWhereUniqueInput;
    where?: Prisma.SubjectWhereInput;
    orderBy?: Prisma.SubjectOrderByWithRelationInput;
  }): Promise<Subject[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.subject.findMany({ skip, take, cursor, where, orderBy });
  }

  async create(params: { data: Prisma.SubjectCreateInput }): Promise<Subject> {
    const { data } = params;
    return this.prisma.subject.create({ data });
  }

  async update(params: {
    where: Prisma.SubjectWhereUniqueInput;
    data: Prisma.SubjectUpdateInput;
  }): Promise<Subject> {
    const { where, data } = params;
    return this.prisma.subject.update({ where, data });
  }

  async delete(params: {
    where: Prisma.SubjectWhereUniqueInput;
  }): Promise<Subject> {
    const { where } = params;
    return this.prisma.subject.delete({ where });
  }
}
