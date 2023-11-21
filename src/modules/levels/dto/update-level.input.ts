import { CreateLevelInput } from './create-level.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLevelInput extends PartialType(CreateLevelInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
