import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionType } from './entities/questionType.entity';
import { CreateQuestionTypeInput } from './dto/create-questionType.input';
import { UpdateQuestionTypeInput } from './dto/update-questionType.input';
import { QuestionTypesService } from './questionTypes.service';

@Resolver(() => QuestionType)
export class QuestionTypesResolver {
  constructor(private readonly service: QuestionTypesService) {}

  @Mutation(() => QuestionType)
  createQuestionType(
    @Args('createQuestionTypeInput')
    createQuestionTypeInput: CreateQuestionTypeInput,
  ) {
    return this.service.create(createQuestionTypeInput);
  }

  @Query(() => [QuestionType], { name: 'questionTypes' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => QuestionType, { name: 'questionType' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => QuestionType)
  updateQuestionType(
    @Args('updateQuestionTypeInput')
    updateQuestionTypeInput: UpdateQuestionTypeInput,
  ) {
    return this.service.update(updateQuestionTypeInput);
  }

  @Mutation(() => QuestionType)
  removeQuestionType(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
