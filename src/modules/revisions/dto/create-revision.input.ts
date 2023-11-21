import { InputType, Field } from '@nestjs/graphql';
import { Prisma, RevisionSessionStatus } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateRevisionSessionInput {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  status: RevisionSessionStatus;

  @Field()
  levelId: string;

  @Field()
  userId: string;

  @Field()
  lessonsIds: string[];
}
