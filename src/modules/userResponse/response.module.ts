import { Module } from '@nestjs/common';
import { UserResponsesService } from './response.service';
import { UserResponsesResolver } from './response.resolver';
import { UserResponsesRepository } from './response.repository';
import { AnswerOptionsModule } from '../answers/answers.module';

@Module({
  imports: [AnswerOptionsModule],
  providers: [
    UserResponsesResolver,
    UserResponsesService,
    UserResponsesRepository,
  ],
  exports: [UserResponsesService],
})
export class UserResponsesModule {}
