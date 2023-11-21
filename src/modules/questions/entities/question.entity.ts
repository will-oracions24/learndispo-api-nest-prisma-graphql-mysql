import { ObjectType, Field } from '@nestjs/graphql';
import { Question as modelDB } from '@prisma/client';

@ObjectType()
export class Question {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  content: modelDB['content'];
}
