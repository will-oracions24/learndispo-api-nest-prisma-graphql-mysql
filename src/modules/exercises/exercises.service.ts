import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { ExerciseRepository } from './exercises.repository';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';
import { QuestionsService } from '../questions/quetions.service';

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
    const {
      levelId,
      lessonsIds,
      questionTypeId,
      questions: questionsCreateDtoList,
      ...rest
    } = createExerciseData;
    const model = await this.repository.create({
      data: {
        ...rest,

        level: {
          connect: {
            id: levelId,
          },
        },

        questionType: {
          connect: {
            id: questionTypeId,
          },
        },
        lessons: {
          connect: [...lessonsIds.map((id) => ({ id }))],
        },

        questions: {
          create: [
            ...questionsCreateDtoList.map(
              ({
                answers: a,
                content,
                difficulty,
                questionTypeId,
                exerciseId,
              }) => {
                return {
                  content,
                  difficulty,
                  questionTypeId,
                  exerciseId, // <- to be remove
                  answerOptions: {
                    create: [...a.map((a) => ({ ...a }))],
                  },
                };
              },
            ),
          ],
        },
      },
    });

    return model;
  }

  public async update(
    updateExerciseData: UpdateExerciseInput,
  ): Promise<Exercise> {
    const {
      levelId,
      lessonsIds,
      questionTypeId,
      questions: questionsCreateDtoList,
      ...rest
    } = updateExerciseData;

    const model = await this.repository.update({
      where: { id: updateExerciseData.id },
      data: {
        ...rest,

        level: {
          connect: {
            id: levelId,
          },
        },

        questionType: {
          connect: {
            id: questionTypeId,
          },
        },
        lessons: {
          connect: [...lessonsIds.map((id) => ({ id }))],
        },
      },
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
