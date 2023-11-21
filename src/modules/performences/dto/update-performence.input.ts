import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePerformanceInput } from './create-performence.input';

@InputType()
export class UpdatePerformanceInput extends PartialType(
  CreatePerformanceInput,
) {
  @Field()
  id: string;

  // @Field()
  // name: string;

  // @Field()
  // description: string;
}
