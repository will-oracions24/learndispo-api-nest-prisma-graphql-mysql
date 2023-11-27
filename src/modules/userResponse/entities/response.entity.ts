import { ObjectType, Field } from '@nestjs/graphql';
import { UserResponse as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class UserResponse extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  responseText: modelDB['reponseText'];

  @Field(() => String)
  isCorrect: modelDB['isCorrect'];
}
