import { ObjectType, Field } from '@nestjs/graphql';
import { AnswerOption as modelDB } from '@prisma/client';

@ObjectType()
export class AnswerOption {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  content: modelDB['content'];

  @Field(() => String)
  isCorrect: modelDB['isCorrect'];
}
