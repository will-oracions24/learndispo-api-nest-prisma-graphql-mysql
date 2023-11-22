import { InputType, Field } from '@nestjs/graphql';
import { RevisionSessionStatus } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateRevisionSessionInput {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @Field(() => RevisionSessionStatus)
  status: RevisionSessionStatus;

  @Field()
  levelId: string;

  @Field()
  userId: string;

  @Field(() => [String])
  lessonsIds: string[];
}
