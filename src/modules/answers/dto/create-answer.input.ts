import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateAnswerOptionInput {
  @IsString()
  @MinLength(3)
  @Field()
  content: string;

  @IsBoolean()
  @MinLength(3)
  @Field()
  isCorrect: boolean;

  @Field(() => String, { nullable: true })
  questionId?: string;
}
