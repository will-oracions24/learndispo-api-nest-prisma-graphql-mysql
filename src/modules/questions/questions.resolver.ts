import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Question } from './entities/question.entity';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { QuestionsService } from './quetions.service';
import { AnswerOption } from '../answers/entities/answer.entity';
import { AnswerOptionsService } from '../answers/answers.service';

@Resolver(() => Question)
export class QuestionsResolver {
  constructor(
    private readonly service: QuestionsService,
    private readonly answersService: AnswerOptionsService,
  ) {}

  @Mutation(() => Question)
  createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ) {
    return this.service.create(createQuestionInput);
  }

  @Query(() => [Question], { name: 'questions' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Question)
  updateQuestion(
    @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput,
  ) {
    return this.service.update(updateQuestionInput);
  }

  @Mutation(() => Question)
  removeQuestion(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }

  @ResolveField('answers', () => [AnswerOption])
  async resolveAnswers(@Parent() parent: Question) {
    const { id } = parent;
    return this.answersService.getMany({ questionId: id });
  }
}
