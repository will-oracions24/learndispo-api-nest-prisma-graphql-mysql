import { Injectable } from '@nestjs/common';
import { AnswerOption } from '@prisma/client';
import { AnswerOptionsRepository } from './answers.repository';
import { CreateAnswerOptionInput } from './dto/create-answer.input';
import { UpdateAnswerOptionInput } from './dto/update-answer.input';

@Injectable()
export class AnswerOptionsService {
  constructor(private repository: AnswerOptionsRepository) {}

  public async getOne(id: string): Promise<AnswerOption> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(getAnswerOptionsArgs?: {
    [key: string]: string;
  }): Promise<AnswerOption[]> {
    return await this.repository.getMany({
      where: { ...getAnswerOptionsArgs },
    });
  }

  public async create(
    createAnswerOptionData: CreateAnswerOptionInput,
  ): Promise<AnswerOption> {
    const { questionId, ...rest } = createAnswerOptionData;

    const model = await this.repository.create({
      data: {
        ...rest,
        question: {
          connect: {
            id: createAnswerOptionData.questionId,
          },
        },
      },
    });

    return model;
  }

  public async update(
    updateAnswerOptionData: UpdateAnswerOptionInput,
  ): Promise<AnswerOption> {
    const { questionId, ...rest } = updateAnswerOptionData;
    const model = await this.repository.update({
      where: { id: updateAnswerOptionData.id },
      data: {
        ...rest,
        question: {
          connect: {
            id: updateAnswerOptionData.questionId,
          },
        },
      },
    });

    return model;
  }

  public async delete(id: string): Promise<AnswerOption> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
