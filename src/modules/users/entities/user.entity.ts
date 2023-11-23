import { ObjectType, Field } from '@nestjs/graphql';
import { User as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class User extends BaseEntity {
  @Field(() => String)
  username: modelDB['username'];
  email: modelDB['email'];
  password: modelDB['password'];
}
