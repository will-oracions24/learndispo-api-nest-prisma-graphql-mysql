import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesResolver } from './exercises.resolver';
import { ExerciseRepository } from './exercises.repository';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [QuestionsModule],
  providers: [ExercisesResolver, ExercisesService, ExerciseRepository],
})
export class ExercisesModule {}
