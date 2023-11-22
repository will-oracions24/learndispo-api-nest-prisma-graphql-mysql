import { Module } from '@nestjs/common';
import { AnswerOptionsService } from './answers.service';
import { AnswerOptionsResolver } from './answers.resolver';
import { AnswerOptionsRepository } from './answers.repository';

@Module({
  providers: [
    AnswerOptionsResolver,
    AnswerOptionsService,
    AnswerOptionsRepository,
  ],
})
export class AnswerOptionsModule {}
