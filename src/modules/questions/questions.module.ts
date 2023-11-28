import { Module, forwardRef } from '@nestjs/common';
import { QuestionsService } from './quetions.service';
import { QuestionsResolver } from './questions.resolver';
import { QuestionsRepository } from './questions.repository';
import { AnswerOptionsModule } from '../answers/answers.module';

@Module({
  imports: [forwardRef(() => AnswerOptionsModule)],
  providers: [QuestionsResolver, QuestionsService, QuestionsRepository],
  exports: [QuestionsService],
})
export class QuestionsModule {}
