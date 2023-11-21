import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Performance } from './entities/performence.entity';
import { CreatePerformanceInput } from './dto/create-performence.input';
import { UpdatePerformanceInput } from './dto/update-performence.input';
import { PerformancesService } from './performences.service';

@Resolver(() => Performance)
export class PerformancesResolver {
  constructor(private readonly service: PerformancesService) {}

  @Mutation(() => Performance)
  createPerformance(
    @Args('createPerformanceInput')
    createPerformanceInput: CreatePerformanceInput,
  ) {
    return this.service.create(createPerformanceInput);
  }

  @Query(() => [Performance], { name: 'performences' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Performance, { name: 'performence' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Performance)
  updatePerformance(
    @Args('updatePerformanceInput')
    updatePerformanceInput: UpdatePerformanceInput,
  ) {
    return this.service.update(updatePerformanceInput);
  }

  @Mutation(() => Performance)
  removePerformance(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
