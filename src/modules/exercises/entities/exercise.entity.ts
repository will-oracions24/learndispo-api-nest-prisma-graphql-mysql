import { ObjectType, Field } from '@nestjs/graphql';
import { Level as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class Exercise extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];
}
