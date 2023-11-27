import { InputType, Field } from '@nestjs/graphql';
import { RevisionSessionStatus } from '@prisma/client';
import { CreateUserResponseInput } from 'src/modules/userResponse/dto/create-response.input';

@InputType()
export class CreateRevisionSessionInput {
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

  @Field({ nullable: true })
  score?: string;

  @Field({ nullable: true })
  feedback?: string;

  @Field(() => [CreateUserResponseInput])
  userResponses: CreateUserResponseInput[];
}
