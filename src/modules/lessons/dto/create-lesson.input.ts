import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @IsString()
  @MinLength(3)
  @Field()
  description: string;

  @Field()
  subject: Prisma.SubjectCreateNestedOneWithoutLessonsInput;
}
