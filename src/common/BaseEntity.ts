import { ObjectType, Field } from '@nestjs/graphql';
import { Level as modelDB } from '@prisma/client';

@ObjectType()
export class BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  createdAt: modelDB['createdAt'];

  @Field(() => String)
  updatedAt: modelDB['updatedAt'];
}
