import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserResponseInput {
  @IsString()
  @Field(() => String, { nullable: true })
  reponseText: string;

  @Field()
  questionId: string;

  @Field()
  userId: string;

  @Field({ nullable: true })
  revisionId?: string;

  @Field()
  answerOptionId: string;
}
