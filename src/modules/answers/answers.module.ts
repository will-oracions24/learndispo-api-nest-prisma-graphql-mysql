import { Module, forwardRef } from '@nestjs/common';
import { AnswerOptionsService } from './answers.service';
import { AnswerOptionsResolver } from './answers.resolver';
import { AnswerOptionsRepository } from './answers.repository';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [forwardRef(() => QuestionsModule)],
  providers: [
    AnswerOptionsResolver,
    AnswerOptionsService,
    AnswerOptionsRepository,
  ],
  exports: [AnswerOptionsService],
})
export class AnswerOptionsModule {}
