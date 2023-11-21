import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserResponseInput {
  @IsString()
  @MinLength(3)
  @Field()
  reponseText: string;

  @Field()
  questionId: string;

  @Field()
  userId: string;

  @Field()
  answserId: string;
}
