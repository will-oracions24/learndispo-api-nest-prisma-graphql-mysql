import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RevisionSession } from './entities/revision';
import { CreateRevisionSessionInput } from './dto/create-revision.input';
import { UpdateRevisionSessionInput } from './dto/update-revision.input';
import { RevisionSessionsService } from './revisions.service';

@Resolver(() => RevisionSession)
export class RevisionSessionsResolver {
  constructor(private readonly service: RevisionSessionsService) {}

  @Mutation(() => RevisionSession)
  createRevisionSession(
    @Args('createRevisionSessionInput')
    createRevisionSessionInput: CreateRevisionSessionInput,
  ) {
    return this.service.create(createRevisionSessionInput);
  }

  @Query(() => [RevisionSession], { name: 'revisions' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => RevisionSession, { name: 'revision' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => RevisionSession)
  updateRevisionSession(
    @Args('updateRevisionSessionInput')
    updateRevisionSessionInput: UpdateRevisionSessionInput,
  ) {
    return this.service.update(updateRevisionSessionInput);
  }

  @Mutation(() => RevisionSession)
  removeRevisionSession(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
