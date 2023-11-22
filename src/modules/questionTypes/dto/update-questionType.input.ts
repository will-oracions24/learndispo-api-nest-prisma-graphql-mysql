import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateQuestionTypeInput } from './create-questionType.input';

@InputType()
export class UpdateQuestionTypeInput extends PartialType(
  CreateQuestionTypeInput,
) {
  @Field()
  id: string;

  // @Field()
  // name: string;

  // @Field()
  // description: string;
}
