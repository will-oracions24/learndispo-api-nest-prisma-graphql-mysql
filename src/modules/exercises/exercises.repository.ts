import { Injectable } from '@nestjs/common';
import { Prisma, Exercise } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class ExerciseRepository {
  constructor(private prisma: DatabaseService) {}

  async getOne(params: {
    where?: Prisma.ExerciseWhereUniqueInput;
  }): Promise<Exercise> {
    const { where } = params;
    return this.prisma.exercise.findUnique({
      where,
      include: { level: true, lessons: true },
    });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ExerciseWhereUniqueInput;
    where?: Prisma.ExerciseWhereInput;
    orderBy?: Prisma.ExerciseOrderByWithRelationInput;
  }): Promise<Exercise[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.exercise.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        _count: true,
        lessons: true,
        level: true,
        questions: true,
        questionType: true,
        revisionSession: true,
      },
    });
  }

  async create(params: {
    data: Prisma.ExerciseCreateInput;
  }): Promise<Exercise> {
    const { data } = params;
    return this.prisma.exercise.create({ data });
  }

  async update(params: {
    where: Prisma.ExerciseWhereUniqueInput;
    data: Prisma.ExerciseUpdateInput;
  }): Promise<Exercise> {
    const { where, data } = params;
    return this.prisma.exercise.update({ where, data });
  }

  async delete(params: {
    where: Prisma.ExerciseWhereUniqueInput;
  }): Promise<Exercise> {
    const { where } = params;
    return this.prisma.exercise.delete({ where });
  }
}
