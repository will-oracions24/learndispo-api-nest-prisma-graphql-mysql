import { Injectable } from '@nestjs/common';
import { Prisma, Question } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class QuestionsRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.QuestionWhereUniqueInput;
  }): Promise<Question> {
    const { where } = params;
    return this.prisma.question.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.QuestionWhereUniqueInput;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput;
  }): Promise<Question[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.question.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(params: {
    data: Prisma.QuestionCreateInput;
  }): Promise<Question> {
    const { data } = params;
    return this.prisma.question.create({ data });
  }

  async update(params: {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.QuestionUpdateInput;
  }): Promise<Question> {
    const { where, data } = params;
    return this.prisma.question.update({ where, data });
  }

  async delete(params: {
    where: Prisma.QuestionWhereUniqueInput;
  }): Promise<Question> {
    const { where } = params;
    return this.prisma.question.delete({ where });
  }
}
