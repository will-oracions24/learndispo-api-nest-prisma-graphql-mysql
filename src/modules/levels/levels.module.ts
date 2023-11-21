import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsResolver } from './levels.resolver';

@Module({
  providers: [LevelsResolver, LevelsService],
})
export class LevelsModule {}
