import { ObjectType, Field } from '@nestjs/graphql';
import { Lesson as modelDB } from '@prisma/client';

@ObjectType()
export class Lesson {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];

  @Field(() => String)
  description: modelDB['description'];
}
