import { Injectable } from '@nestjs/common';
import { Prisma, AnswerOption } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class AnswerOptionsRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.AnswerOptionWhereUniqueInput;
  }): Promise<AnswerOption> {
    const { where } = params;
    return this.prisma.answerOption.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AnswerOptionWhereUniqueInput;
    where?: Prisma.AnswerOptionWhereInput;
    orderBy?: Prisma.AnswerOptionOrderByWithRelationInput;
  }): Promise<AnswerOption[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.answerOption.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.AnswerOptionCreateInput;
  }): Promise<AnswerOption> {
    const { data } = params;
    return this.prisma.answerOption.create({ data });
  }

  async update(params: {
    where: Prisma.AnswerOptionWhereUniqueInput;
    data: Prisma.AnswerOptionUpdateInput;
  }): Promise<AnswerOption> {
    const { where, data } = params;
    return this.prisma.answerOption.update({ where, data });
  }

  async delete(params: {
    where: Prisma.AnswerOptionWhereUniqueInput;
  }): Promise<AnswerOption> {
    const { where } = params;
    return this.prisma.answerOption.delete({ where });
  }
}
