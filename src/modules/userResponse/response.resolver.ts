import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserResponse } from './entities/response.entity';
import { CreateUserResponseInput } from './dto/create-response.input';
import { UpdateUserResponseInput } from './dto/update-response.input';
import { UserResponsesService } from './response.service';

@Resolver(() => UserResponse)
export class UserResponsesResolver {
  constructor(private readonly service: UserResponsesService) {}

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
}
