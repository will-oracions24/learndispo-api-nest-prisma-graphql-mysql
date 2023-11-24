import { Field, InputType } from '@nestjs/graphql';
import { QuestionDifficulty } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';
import { CreateAnswerOptionInput } from 'src/modules/answers/dto/create-answer.input';

@InputType()
export class CreateQuestionInput {
  @IsString()
  @MinLength(3)
  @Field()
  content: string;

  @Field(() => QuestionDifficulty)
  difficulty: QuestionDifficulty;

  @Field()
  questionTypeId: string;

  @Field()
  exerciseId: string;

  @Field(() => [CreateAnswerOptionInput])
  answers: CreateAnswerOptionInput[];
}
