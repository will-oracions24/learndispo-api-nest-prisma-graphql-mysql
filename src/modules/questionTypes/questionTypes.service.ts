import { Injectable } from '@nestjs/common';
import { QuestionType } from '@prisma/client';
import { QuestionTypesRepository } from './questionTypes.repository';
import { CreateQuestionTypeInput } from './dto/create-questionType.input';
import { UpdateQuestionTypeInput } from './dto/update-questionType.input';

@Injectable()
export class QuestionTypesService {
  constructor(private repository: QuestionTypesRepository) {}

  public async getOne(id: string): Promise<QuestionType> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getQuestionTypesArgs */): Promise<QuestionType[]> {
    return await this.repository.getMany({
      // where: { toiletId: getQuestionTypesArgs.toiletId },
    });
  }

  public async create(
    createQuestionTypeData: CreateQuestionTypeInput,
  ): Promise<QuestionType> {
    const { ...rest } = createQuestionTypeData;

    const model = await this.repository.create({
      data: {
        ...rest,
      },
    });

    return model;
  }

  public async update(
    updateQuestionTypeData: UpdateQuestionTypeInput,
  ): Promise<QuestionType> {
    const { ...rest } = updateQuestionTypeData;
    const model = await this.repository.update({
      where: { id: updateQuestionTypeData.id },
      data: {
        ...rest,
      },
    });

    return model;
  }

  public async delete(id: string): Promise<QuestionType> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
