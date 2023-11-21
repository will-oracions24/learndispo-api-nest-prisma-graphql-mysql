import { ObjectType, Field } from '@nestjs/graphql';
import { Level as LevelDB } from '@prisma/client';

@ObjectType()
export class Subject {
  @Field(() => String)
  id: LevelDB['id'];

  @Field(() => String)
  name: LevelDB['name'];

  @Field(() => String)
  description: LevelDB['description'];
}
