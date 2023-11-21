import { ObjectType, Field } from '@nestjs/graphql';
import { Performance as modelDB } from '@prisma/client';

@ObjectType()
export class Performance {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  score: modelDB['score'];

  @Field(() => String)
  feedback: modelDB['feedback'];
}
