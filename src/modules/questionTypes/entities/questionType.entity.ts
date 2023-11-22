import { ObjectType, Field } from '@nestjs/graphql';
import { QuestionType as modelDB } from '@prisma/client';

@ObjectType()
export class QuestionType {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];

  @Field(() => String)
  description: modelDB['description'];
}
