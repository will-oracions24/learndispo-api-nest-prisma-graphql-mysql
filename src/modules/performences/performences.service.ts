import { Injectable } from '@nestjs/common';
import { Performance } from '@prisma/client';
import { PerformancesRepository } from './performences.repository';
import { CreatePerformanceInput } from './dto/create-performence.input';
import { UpdatePerformanceInput } from './dto/update-performence.input';

@Injectable()
export class PerformancesService {
  constructor(private repository: PerformancesRepository) {}

  public async getOne(id: string): Promise<Performance> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getPerformancesArgs */): Promise<Performance[]> {
    return await this.repository.getMany({
      // where: { toiletId: getPerformancesArgs.toiletId },
    });
  }

  public async create(
    createPerformanceData: CreatePerformanceInput,
  ): Promise<Performance> {
    const { revisionId, ...rest } = createPerformanceData;

    const model = await this.repository.create({
      data: {
        ...rest,
        revisionSession: {
          connect: {
            id: revisionId,
          },
        },
      },
    });

    return model;
  }

  public async update(
    updatePerformanceData: UpdatePerformanceInput,
  ): Promise<Performance> {
    const { revisionId, ...rest } = updatePerformanceData;
    const model = await this.repository.update({
      where: { id: updatePerformanceData.id },
      data: {
        ...rest,
        revisionSession: {
          connect: {
            id: revisionId,
          },
        },
      },
    });

    return model;
  }

  public async delete(id: string): Promise<Performance> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
