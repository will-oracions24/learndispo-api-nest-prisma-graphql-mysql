import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserResponse } from './entities/response.entity';
import { CreateUserResponseInput } from './dto/create-response.input';
import { UpdateUserResponseInput } from './dto/update-response.input';
import { UserResponsesService } from './response.service';
import { AnswerOption } from '../answers/entities/answer.entity';
import { AnswerOptionsService } from '../answers/answers.service';

@Resolver(() => UserResponse)
export class UserResponsesResolver {
  constructor(
    private readonly service: UserResponsesService,
    private readonly answerOptionsService: AnswerOptionsService,
  ) {}

  @Mutation(() => UserResponse)
  createUserResponse(
    @Args('createUserResponseInput')
    createUserResponseInput: CreateUserResponseInput,
  ) {
    return this.service.create(createUserResponseInput);
  }

  @Query(() => [UserResponse], { name: 'userResponses' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => UserResponse, { name: 'userResponse' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => UserResponse)
  updateUserResponse(
    @Args('updateUserResponseInput')
    updateUserResponseInput: UpdateUserResponseInput,
  ) {
    return this.service.update(updateUserResponseInput);
  }

  @Mutation(() => UserResponse)
  removeUserResponse(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }

  @ResolveField('selectedAnswer', () => AnswerOption, { nullable: true })
  async resolveUserResponses(@Parent() parent: UserResponse) {
    const id = parent.id;
    // const revision = await this.service.getOne(revisionId.id);
    return this.answerOptionsService.getOne({ questionId: id });
  }
}
