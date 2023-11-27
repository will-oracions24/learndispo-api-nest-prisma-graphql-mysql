import { Module } from '@nestjs/common';
import { RevisionSessionsResolver } from './revisions.resolver';
import { RevisionSessionsService } from './revisions.service';
import { RevisionSessionsRepository } from './revisions.repository';
import { UsersModule } from '../users/users.module';
import { LevelsModule } from '../levels/levels.module';
import { ExercisesModule } from '../exercises/exercises.module';
import { UserResponsesModule } from '../userResponse/response.module';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [
    UsersModule,
    LevelsModule,
    ExercisesModule,
    UserResponsesModule,
    QuestionsModule,
  ],
  providers: [
    RevisionSessionsResolver,
    RevisionSessionsService,
    RevisionSessionsRepository,
  ],
})
export class RevisionsModule {}
