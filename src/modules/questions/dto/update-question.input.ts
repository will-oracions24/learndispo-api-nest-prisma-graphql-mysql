import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateQuestionInput } from './create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field()
  id: string;

  // @Field()
  // name: string;

  // @Field()
  // description: string;
}
