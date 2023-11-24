import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { ExerciseRepository } from './exercises.repository';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';

@Injectable()
export class ExercisesService {
  constructor(private repository: ExerciseRepository) {}

  public async getOne(id: string): Promise<Exercise> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getExercisesArgs */): Promise<Exercise[]> {
    return await this.repository.getMany({
      // where: { toiletId: getExercisesArgs.toiletId },
    });
  }

  public async create(
    createExerciseData: CreateExerciseInput,
  ): Promise<Exercise> {
    const model = await this.repository.create({
      data: {
        ...createExerciseData,
      },
    });

    return model;
  }

  public async update(
    updateExerciseData: UpdateExerciseInput,
  ): Promise<Exercise> {
    const model = await this.repository.update({
      where: { id: updateExerciseData.id },
      data: updateExerciseData,
    });

    return model;
  }

  public async delete(id: string): Promise<Exercise> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
