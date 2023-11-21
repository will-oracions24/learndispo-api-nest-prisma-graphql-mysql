import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LevelsService } from './levels.service';
import { Level } from './entities/level.entity';
import { CreateLevelInput } from './dto/create-level.input';
import { UpdateLevelInput } from './dto/update-level.input';

@Resolver(() => Level)
export class LevelsResolver {
  constructor(private readonly levelsService: LevelsService) {}

  @Mutation(() => Level)
  createLevel(@Args('createLevelInput') createLevelInput: CreateLevelInput) {
    return this.levelsService.create(createLevelInput);
  }

  @Query(() => [Level], { name: 'levels' })
  findAll() {
    return this.levelsService.findAll();
  }

  @Query(() => Level, { name: 'level' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.levelsService.findOne(id);
  }

  @Mutation(() => Level)
  updateLevel(@Args('updateLevelInput') updateLevelInput: UpdateLevelInput) {
    return this.levelsService.update(updateLevelInput.id, updateLevelInput);
  }

  @Mutation(() => Level)
  removeLevel(@Args('id', { type: () => Int }) id: number) {
    return this.levelsService.remove(id);
  }
}
