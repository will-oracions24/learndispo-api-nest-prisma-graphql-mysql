import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsResolver } from './levels.resolver';
import { LevelRepository } from './levels.repository';

@Module({
  providers: [LevelsResolver, LevelsService, LevelRepository],
  exports: [LevelsService],
})
export class LevelsModule {}
