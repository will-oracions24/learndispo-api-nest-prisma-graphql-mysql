import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateRevisionSessionInput } from './create-revision.input';

@InputType()
export class UpdateRevisionSessionInput extends PartialType(
  CreateRevisionSessionInput,
) {
  @Field()
  id: string;
}
