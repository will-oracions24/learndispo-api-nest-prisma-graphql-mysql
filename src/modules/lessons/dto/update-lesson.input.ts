import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateLessonInput } from './create-lesson.input';

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
