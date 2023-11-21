import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { LessonsRepository } from './lessons.repository';

@Module({
  providers: [LessonsResolver, LessonsService, LessonsRepository],
})
export class LessonsModule {}
