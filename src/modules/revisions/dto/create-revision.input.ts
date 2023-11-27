import { InputType, Field } from '@nestjs/graphql';
import { RevisionSessionStatus } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';
import { CreateUserResponseInput } from 'src/modules/userResponse/dto/create-response.input';

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

  @Field()
  exerciseId: string;

  @Field(() => [String])
  lessonsIds: string[];

  @Field()
  score: string;

  @Field({ nullable: true })
  feedback?: string;

  @Field(() => [CreateUserResponseInput])
  userResponses: CreateUserResponseInput[];
}
