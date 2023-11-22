import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateAnswerOptionInput } from './create-answer.input';

@InputType()
export class UpdateAnswerOptionInput extends PartialType(
  CreateAnswerOptionInput,
) {
  @Field()
  id: string;

  // @Field()
  // name: string;

  // @Field()
  // description: string;
}
