import { ObjectType, Field } from '@nestjs/graphql';
import { Level as modelDB } from '@prisma/client';

@ObjectType()
export class Subject {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];

  @Field(() => String)
  description: modelDB['description'];
}
