import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Level } from './entities/level.entity';
import { CreateLevelInput } from './dto/create-level.input';
import { UpdateLevelInput } from './dto/update-level.input';
import { LevelsService } from './levels.service';

@Resolver(() => Level)
export class LevelsResolver {
  constructor(private readonly service: LevelsService) {}

  @Mutation(() => Level)
  createLevel(@Args('createLevelInput') createLevelInput: CreateLevelInput) {
    return this.service.create(createLevelInput);
  }

  @Query(() => [Level], { name: 'levels' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Level, { name: 'level' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Level)
  updateLevel(@Args('updateLevelInput') updateLevelInput: UpdateLevelInput) {
    return this.service.update(updateLevelInput);
  }

  @Mutation(() => Level)
  removeLevel(@Args('id', { type: () => Int }) id: string) {
    return this.service.delete(id);
  }
}
