import { Injectable } from '@nestjs/common';
import { Question } from '@prisma/client';
import { QuestionsRepository } from './questions.repository';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Injectable()
export class QuestionsService {
  constructor(private repository: QuestionsRepository) {}

  public async getOne(id: string): Promise<Question> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(getQuestionsArgs?: {
    [key: string]: string;
  }): Promise<Question[]> {
    return await this.repository.getMany({
      where: { ...getQuestionsArgs },
    });
  }

  public async create(
    createQuestionData: CreateQuestionInput,
  ): Promise<Question> {
    const { answers, questionTypeId, exerciseId, ...rest } = createQuestionData;

    const model = await this.repository.create({
      data: {
        ...rest,
        type: {
          connect: {
            id: questionTypeId,
          },
        },
        answerOptions: {
          create: [...answers.map((answer) => ({ ...answer }))],
        },
        exercise: {
          connect: {
            id: exerciseId,
          },
        },
      },
    });

    return model;
  }

  public async update(
    updateQuestionData: UpdateQuestionInput,
  ): Promise<Question> {
    const { answers, questionTypeId, ...rest } = updateQuestionData;
    const model = await this.repository.update({
      where: { id: updateQuestionData.id },
      data: {
        ...rest,

        type: {
          connect: {
            id: questionTypeId,
          },
        },

        answerOptions: {
          create: [
            ...answers.map((answer) => ({
              ...answer,
            })),
          ],
        },
      },
    });

    return model;
  }

  public async delete(id: string): Promise<Question> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
