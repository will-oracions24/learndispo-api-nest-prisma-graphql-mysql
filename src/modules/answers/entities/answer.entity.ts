import { ObjectType, Field } from '@nestjs/graphql';
import { AnswerOption as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class AnswerOption extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  content: modelDB['content'];

  @Field(() => String)
  isCorrect: modelDB['isCorrect'];
}
