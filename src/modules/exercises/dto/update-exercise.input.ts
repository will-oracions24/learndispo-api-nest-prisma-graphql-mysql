import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateExerciseInput } from './create-exercise.input';

@InputType()
export class UpdateExerciseInput extends PartialType(CreateExerciseInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
