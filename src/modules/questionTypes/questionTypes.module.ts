import { Module } from '@nestjs/common';
import { QuestionTypesService } from './questionTypes.service';
import { QuestionTypesResolver } from './questionTypes.resolver';
import { QuestionTypesRepository } from './questionTypes.repository';

@Module({
  providers: [
    QuestionTypesResolver,
    QuestionTypesService,
    QuestionTypesRepository,
  ],
})
export class QuestionTypesModule {}
