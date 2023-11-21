import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/common/database/database.service';

@Injectable()
export class LevelsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createLevelDto: Prisma.LevelCreateInput) {
    return this.databaseService.level.create({ data: createLevelDto });
  }

  findAll() {
    return this.databaseService.level.findMany();
  }

  findOne(id: string) {
    return this.databaseService.level.findUnique({
      where: { id },
    });
  }

  update(id: string, updateLevelDto: Prisma.LevelUpdateInput) {
    return this.databaseService['level'].update({
      where: { id },
      data: updateLevelDto,
    });
  }

  remove(id: string) {
    return this.databaseService.level.delete({
      where: { id },
    });
  }
}
