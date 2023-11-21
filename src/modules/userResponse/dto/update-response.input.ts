import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateUserResponseInput } from './create-response.input';

@InputType()
export class UpdateUserResponseInput extends PartialType(
  CreateUserResponseInput,
) {
  @Field()
  id: string;

  // @Field()
  // name: string;

  // @Field()
  // description: string;
}
