import { ObjectType, Field } from '@nestjs/graphql';
import { Lesson as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class Lesson extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];

  @Field(() => String)
  description: modelDB['description'];
}
