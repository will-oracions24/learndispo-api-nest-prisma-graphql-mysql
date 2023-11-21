import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateQuestionInput } from './create-question.input';
import { Prisma } from '@prisma/client';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field()
  id: string;
}
