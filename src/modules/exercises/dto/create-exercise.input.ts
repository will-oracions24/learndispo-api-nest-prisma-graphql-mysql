import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';
import { CreateQuestionInput } from 'src/modules/questions/dto/create-question.input';

@InputType()
export class CreateExerciseInput {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @IsString()
  @Field()
  levelId: string;

  @IsString()
  @Field()
  questionTypeId: string;

  @IsString()
  @Field(() => [String], { defaultValue: [] })
  lessonsIds: string[];

  @Field(() => CreateQuestionInput)
  questions: CreateQuestionInput[];
}
