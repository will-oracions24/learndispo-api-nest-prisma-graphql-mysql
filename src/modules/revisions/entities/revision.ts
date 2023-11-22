import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import {
  RevisionSessionStatus,
  RevisionSession as modelDB,
} from '@prisma/client';

@ObjectType()
export class RevisionSession {
  @Field(() => String)
  id: modelDB['id'];

  status: modelDB['status'];
}

registerEnumType(RevisionSessionStatus, { name: 'RevisionSessionStatus' });
