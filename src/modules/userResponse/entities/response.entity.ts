import { ObjectType, Field } from '@nestjs/graphql';
import { UserResponse as modelDB } from '@prisma/client';

@ObjectType()
export class UserResponse {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  responseText: modelDB['reponseText'];

  @Field(() => String)
  isCorrect: modelDB['isCorrect'];
}
