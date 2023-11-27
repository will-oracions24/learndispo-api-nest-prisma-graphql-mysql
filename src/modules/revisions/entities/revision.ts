import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import {
  RevisionSessionStatus,
  RevisionSession as modelDB,
} from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class RevisionSession extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => RevisionSessionStatus)
  status: modelDB['status'];

  @Field(() => String, { nullable: true })
  score: modelDB['score'];

  @Field(() => String, { nullable: true })
  feedback: modelDB['feedback'];
}

registerEnumType(RevisionSessionStatus, { name: 'RevisionSessionStatus' });
