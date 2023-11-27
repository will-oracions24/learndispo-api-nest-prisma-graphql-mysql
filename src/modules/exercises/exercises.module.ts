import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesResolver } from './exercises.resolver';
import { ExerciseRepository } from './exercises.repository';
import { QuestionsModule } from '../questions/questions.module';
import { LevelsModule } from '../levels/levels.module';

@Module({
  imports: [QuestionsModule, LevelsModule],
  providers: [ExercisesResolver, ExercisesService, ExerciseRepository],
  exports: [ExercisesService],
})
export class ExercisesModule {}
