import { Module } from '@nestjs/common';
import { QuestionsService } from './quetions.service';
import { QuestionsResolver } from './questions.resolver';
import { QuestionsRepository } from './questions.repository';

@Module({
  providers: [QuestionsResolver, QuestionsService, QuestionsRepository],
})
export class QuestionsModule {}
