import { Injectable } from '@nestjs/common';
import { Exercise, RevisionSession } from '@prisma/client';
import { RevisionSessionsRepository } from './revisions.repository';
import { CreateRevisionSessionInput } from './dto/create-revision.input';
import { UpdateRevisionSessionInput } from './dto/update-revision.input';
import { connect } from 'http2';
import { ExercisesService } from '../exercises/exercises.service';
import { CreateUserResponseInput } from '../userResponse/dto/create-response.input';
import { QuestionsService } from '../questions/quetions.service';

@Injectable()
export class RevisionSessionsService {
  constructor(
    private repository: RevisionSessionsRepository,
    private readonly exercisesService: ExercisesService,
    private readonly questionsService: QuestionsService,
  ) {}

  public async getOne(id: string): Promise<RevisionSession> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getRevisionSessionsArgs */): Promise<
    RevisionSession[]
  > {
    return await this.repository.getMany({
      // where: { toiletId: getRevisionSessionsArgs.toiletId },
    });
  }
  public async create(
    createRevisionSessionData: CreateRevisionSessionInput,
  ): Promise<RevisionSession> {
    const {
      exerciseId,
      userResponses,
      userId,
      score,
      feedback,
      levelId,
      lessonsIds,
      ...rest
    } = createRevisionSessionData;
    const exercise = await this.exercisesService.getOne(exerciseId);
    // const userScore = this.calculateScore(exercise, userResponses);

    const model = await this.repository.create({
      data: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
        level: {
          connect: {
            id: levelId,
          },
        },
        // lessons: {
        //   connect: [...lessonsIds.map((id) => ({ id }))],
        // },
        score: score || '',
        feedback,
        exercise: {
          connect: {
            id: exerciseId,
          },
        },
        userResponses: {
          create: [
            ...userResponses.map((userResponse) => ({ ...userResponse })),
          ],
        },
      },
    });

    return model;
  }

  public async update(
    updateRevisionSessionData: UpdateRevisionSessionInput,
  ): Promise<RevisionSession> {
    const {
      exerciseId,
      userResponses,
      userId,
      score,
      feedback,
      levelId,
      lessonsIds,
      ...rest
    } = updateRevisionSessionData;
    const model = await this.repository.update({
      where: { id: updateRevisionSessionData.id },
      data: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
        level: {
          connect: {
            id: levelId,
          },
        },
        // lessons: {
        //   connect: [...lessonsIds.map((id) => ({ id }))],
        // },
        score: score || '',
        feedback,
        exercise: {
          connect: {
            id: exerciseId,
          },
        },
      },
    });

    return model;
  }

  public async delete(id: string): Promise<RevisionSession> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }

  // private async calculateScore(
  //   exercise: Exercise,
  //   userResponses: CreateUserResponseInput[],
  // ) {
  //   const score = 0;
  //   const questions = await this.questionsService.getMany({
  //     exeriseId: exercise.id,
  //   });
  //   questions.map(question => {
  //     const goodAnswer = question.
  //   });
  // }
}
