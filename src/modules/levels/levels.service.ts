import { Injectable } from '@nestjs/common';
import { Level } from '@prisma/client';
import { LevelRepository } from './levels.repository';
import { CreateLevelInput } from './dto/create-level.input';
import { UpdateLevelInput } from './dto/update-level.input';

@Injectable()
export class LevelsService {
  constructor(private levelRepository: LevelRepository) {}

  public async getOne(id: string): Promise<Level> {
    return await this.levelRepository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getLevelsArgs */): Promise<Level[]> {
    return await this.levelRepository.getMany({
      // where: { toiletId: getLevelsArgs.toiletId },
    });
  }

  public async create(createLevelData: CreateLevelInput): Promise<Level> {
    const level = await this.levelRepository.create({
      data: {
        ...createLevelData,
      },
    });

    return level;
  }

  public async update(updateLevelData: UpdateLevelInput): Promise<Level> {
    const level = await this.levelRepository.update({
      where: { id: updateLevelData.id },
      data: updateLevelData,
    });

    return level;
  }

  public async delete(id: string): Promise<Level> {
    const level = await this.levelRepository.delete({
      where: { id },
    });

    return level;
  }
}
