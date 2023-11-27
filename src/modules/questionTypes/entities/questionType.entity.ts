import { ObjectType, Field } from '@nestjs/graphql';
import { QuestionType as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class QuestionType extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  name: modelDB['name'];

  @Field(() => String)
  description: modelDB['description'];
}
