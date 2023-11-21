import { Injectable } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { LessonsRepository } from './lessons.repository';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Injectable()
export class LessonsService {
  constructor(private repository: LessonsRepository) {}

  public async getOne(id: string): Promise<Lesson> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getLessonsArgs */): Promise<Lesson[]> {
    return await this.repository.getMany({
      // where: { toiletId: getLessonsArgs.toiletId },
    });
  }

  public async create(createLessonData: CreateLessonInput): Promise<Lesson> {
    const model = await this.repository.create({
      data: {
        ...createLessonData,
      },
    });

    return model;
  }

  public async update(updateLessonData: UpdateLessonInput): Promise<Lesson> {
    const model = await this.repository.update({
      where: { id: updateLessonData.id },
      data: updateLessonData,
    });

    return model;
  }

  public async delete(id: string): Promise<Lesson> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
