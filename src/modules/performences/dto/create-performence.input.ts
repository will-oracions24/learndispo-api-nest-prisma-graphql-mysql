import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreatePerformanceInput {
  @IsString()
  @MinLength(3)
  @Field()
  score: string;

  @IsString()
  @MinLength(3)
  @Field()
  feedback: string;

  @Field()
  revisionId: string;
}
