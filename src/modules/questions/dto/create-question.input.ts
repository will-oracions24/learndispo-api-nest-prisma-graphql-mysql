import { InputType, Field } from '@nestjs/graphql';
import { Prisma, QuestionDifficulty } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';

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
  answers: (Prisma.AnswerOptionCreateInput | Prisma.AnswerOptionCreateInput)[];
}
