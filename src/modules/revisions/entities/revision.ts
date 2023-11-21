import { ObjectType, Field } from '@nestjs/graphql';
import { RevisionSession as modelDB } from '@prisma/client';

@ObjectType()
export class RevisionSession {
  @Field(() => String)
  id: modelDB['id'];

  status: modelDB['status'];
}
