import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RevisionSession } from './entities/revision';
import { CreateRevisionSessionInput } from './dto/create-revision.input';
import { UpdateRevisionSessionInput } from './dto/update-revision.input';
import { RevisionSessionsService } from './revisions.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { Level } from '../levels/entities/level.entity';
import { LevelsService } from '../levels/levels.service';
import { Exercise } from '../exercises/entities/exercise.entity';
import { ExercisesService } from '../exercises/exercises.service';
import { UserResponse } from '../userResponse/entities/response.entity';
import { UserResponsesService } from '../userResponse/response.service';

@Resolver(() => RevisionSession)
export class RevisionSessionsResolver {
  constructor(
    private readonly service: RevisionSessionsService,
    private readonly usersService: UsersService,
    private readonly levelsService: LevelsService,
    private readonly exercisesService: ExercisesService,
    private readonly userResponsesService: UserResponsesService,
  ) {}

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

  @ResolveField('user', () => User)
  async resolveUser(@Parent() parent: RevisionSession) {
    const revisionId = parent;
    const revision = await this.service.getOne(revisionId.id);
    return this.usersService.getOne(revision.userId);
  }

  @ResolveField('level', () => Level)
  async resolveLevel(@Parent() parent: RevisionSession) {
    const revisionId = parent;
    const revision = await this.service.getOne(revisionId.id);
    return this.levelsService.getOne(revision.levelId);
  }

  @ResolveField('exercise', () => Exercise)
  async resolveExercise(@Parent() parent: RevisionSession) {
    const revisionId = parent;
    const revision = await this.service.getOne(revisionId.id);
    return this.exercisesService.getOne(revision.exerciseId);
  }

  @ResolveField('userResponses', () => [UserResponse])
  async resolveUserResponses(@Parent() parent: RevisionSession) {
    const revisionId = parent.id;
    // const revision = await this.service.getOne(revisionId.id);
    return this.userResponsesService.getMany({ revisionSessionId: revisionId });
  }
}
