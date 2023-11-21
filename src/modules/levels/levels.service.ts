import { Injectable } from '@nestjs/common';
import { Level } from '@prisma/client';
import { LevelRepository } from './levels.repository';
import { CreateLevelInput } from './dto/create-level.input';
import { UpdateLevelInput } from './dto/update-level.input';

@Injectable()
export class LevelsService {
  constructor(private repository: LevelRepository) {}

  public async getOne(id: string): Promise<Level> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getLevelsArgs */): Promise<Level[]> {
    return await this.repository.getMany({
      // where: { toiletId: getLevelsArgs.toiletId },
    });
  }

  public async create(createLevelData: CreateLevelInput): Promise<Level> {
    const level = await this.repository.create({
      data: {
        ...createLevelData,
      },
    });

    return level;
  }

  public async update(updateLevelData: UpdateLevelInput): Promise<Level> {
    const level = await this.repository.update({
      where: { id: updateLevelData.id },
      data: updateLevelData,
    });

    return level;
  }

  public async delete(id: string): Promise<Level> {
    const level = await this.repository.delete({
      where: { id },
    });

    return level;
  }
}
