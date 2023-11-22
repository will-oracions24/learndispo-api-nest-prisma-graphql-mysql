import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswerOption } from './entities/answer.entity';
import { CreateAnswerOptionInput } from './dto/create-answer.input';
import { UpdateAnswerOptionInput } from './dto/update-answer.input';
import { AnswerOptionsService } from './answers.service';

@Resolver(() => AnswerOption)
export class AnswerOptionsResolver {
  constructor(private readonly service: AnswerOptionsService) {}

  @Mutation(() => AnswerOption)
  createAnswerOption(
    @Args('createAnswerOptionInput')
    createAnswerOptionInput: CreateAnswerOptionInput,
  ) {
    return this.service.create(createAnswerOptionInput);
  }

  @Query(() => [AnswerOption], { name: 'answerOptions' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => AnswerOption, { name: 'answerOption' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => AnswerOption)
  updateAnswerOption(
    @Args('updateAnswerOptionInput')
    updateAnswerOptionInput: UpdateAnswerOptionInput,
  ) {
    return this.service.update(updateAnswerOptionInput);
  }

  @Mutation(() => AnswerOption)
  removeAnswerOption(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
