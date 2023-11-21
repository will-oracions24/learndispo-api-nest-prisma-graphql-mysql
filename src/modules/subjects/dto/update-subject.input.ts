import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateSubjectInput } from './create-subject.input';

@InputType()
export class UpdateSubjectInput extends PartialType(CreateSubjectInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
