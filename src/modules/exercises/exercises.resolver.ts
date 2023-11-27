import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Exercise } from './entities/exercise.entity';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';
import { ExercisesService } from './exercises.service';
import { Question } from '../questions/entities/question.entity';
import { QuestionsService } from '../questions/quetions.service';
import { Level } from '../levels/entities/level.entity';
import { LevelsService } from '../levels/levels.service';

@Resolver(() => Exercise)
export class ExercisesResolver {
  constructor(
    private readonly service: ExercisesService,
    private readonly questionsService: QuestionsService,
    private readonly levelsService: LevelsService,
  ) {}

  @Mutation(() => Exercise)
  createExercise(
    @Args('createExerciseInput') createExerciseInput: CreateExerciseInput,
  ) {
    return this.service.create(createExerciseInput);
  }

  @Query(() => [Exercise], { name: 'exercises' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Exercise, { name: 'exercise' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Exercise)
  updateExercise(
    @Args('updateExerciseInput') updateExerciseInput: UpdateExerciseInput,
  ) {
    return this.service.update(updateExerciseInput);
  }

  @Mutation(() => Exercise)
  removeExercise(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }

  @ResolveField('questions', () => [Question])
  async resolveQuestions(@Parent() parent: Exercise) {
    const { id } = parent;
    return this.questionsService.getMany({ exerciseId: id });
  }

  @ResolveField('level', () => Level)
  async resolveLevel(@Parent() parent: Exercise) {
    const exerciceId = parent.id;
    const exercise = await this.service.getOne(exerciceId);
    // console.log('Exercise: ', exercise);
    // console.log('ID: ', id);
    return this.levelsService.getOne(exercise.levelId);
  }
}
