import { Injectable } from '@nestjs/common';
import { Prisma, QuestionType } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class QuestionTypesRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.QuestionTypeWhereUniqueInput;
  }): Promise<QuestionType> {
    const { where } = params;
    return this.prisma.questionType.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.QuestionTypeWhereUniqueInput;
    where?: Prisma.QuestionTypeWhereInput;
    orderBy?: Prisma.QuestionTypeOrderByWithRelationInput;
  }): Promise<QuestionType[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.questionType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.QuestionTypeCreateInput;
  }): Promise<QuestionType> {
    const { data } = params;
    return this.prisma.questionType.create({ data });
  }

  async update(params: {
    where: Prisma.QuestionTypeWhereUniqueInput;
    data: Prisma.QuestionTypeUpdateInput;
  }): Promise<QuestionType> {
    const { where, data } = params;
    return this.prisma.questionType.update({ where, data });
  }

  async delete(params: {
    where: Prisma.QuestionTypeWhereUniqueInput;
  }): Promise<QuestionType> {
    const { where } = params;
    return this.prisma.questionType.delete({ where });
  }
}
