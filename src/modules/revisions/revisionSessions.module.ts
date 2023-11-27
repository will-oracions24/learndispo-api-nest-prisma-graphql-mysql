import { Module } from '@nestjs/common';
import { RevisionSessionsResolver } from './revisions.resolver';
import { RevisionSessionsService } from './revisions.service';
import { RevisionSessionsRepository } from './revisions.repository';
import { UsersModule } from '../users/users.module';
import { LevelsModule } from '../levels/levels.module';
import { ExercisesModule } from '../exercises/exercises.module';
import { UserResponsesModule } from '../userResponse/response.module';

@Module({
  imports: [UsersModule, LevelsModule, ExercisesModule, UserResponsesModule],
  providers: [
    RevisionSessionsResolver,
    RevisionSessionsService,
    RevisionSessionsRepository,
  ],
})
export class RevisionsModule {}
