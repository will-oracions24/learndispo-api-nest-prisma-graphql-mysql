import { Injectable } from '@nestjs/common';
import { RevisionSession } from '@prisma/client';
import { RevisionSessionsRepository } from './revisions.repository';
import { CreateRevisionSessionInput } from './dto/create-revision.input';
import { UpdateRevisionSessionInput } from './dto/update-revision.input';
import { connect } from 'http2';

@Injectable()
export class RevisionSessionsService {
  constructor(private repository: RevisionSessionsRepository) {}

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
    const { userId, score, feedback, levelId, lessonsIds, ...rest } =
      createRevisionSessionData;

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
        score,
        feedback,
        exercise: {},
      },
    });

    return model;
  }

  public async update(
    updateRevisionSessionData: UpdateRevisionSessionInput,
  ): Promise<RevisionSession> {
    const { userId, score, feedback, levelId, lessonsIds, ...rest } =
      updateRevisionSessionData;
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
        score,
        feedback,
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
}
