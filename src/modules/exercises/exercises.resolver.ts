import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Exercise } from './entities/exercise.entity';
import { CreateExerciseInput } from './dto/create-exercise.input';
import { UpdateExerciseInput } from './dto/update-exercise.input';
import { ExercisesService } from './exercises.service';

@Resolver(() => Exercise)
export class ExercisesResolver {
  constructor(private readonly service: ExercisesService) {}

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
}
