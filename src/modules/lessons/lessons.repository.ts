import { Injectable } from '@nestjs/common';
import { Prisma, Lesson } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class LessonsRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.LessonWhereUniqueInput;
  }): Promise<Lesson> {
    const { where } = params;
    return this.prisma.lesson.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LessonWhereUniqueInput;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput;
  }): Promise<Lesson[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.lesson.findMany({ skip, take, cursor, where, orderBy });
  }

  async create(params: { data: Prisma.LessonCreateInput }): Promise<Lesson> {
    const { data } = params;
    return this.prisma.lesson.create({ data });
  }

  async update(params: {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.LessonUpdateInput;
  }): Promise<Lesson> {
    const { where, data } = params;
    return this.prisma.lesson.update({ where, data });
  }

  async delete(params: {
    where: Prisma.LessonWhereUniqueInput;
  }): Promise<Lesson> {
    const { where } = params;
    return this.prisma.lesson.delete({ where });
  }
}
