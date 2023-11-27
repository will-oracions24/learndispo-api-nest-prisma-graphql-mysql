import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { QuestionDifficulty, Question as modelDB } from '@prisma/client';
import { BaseEntity } from 'src/common/BaseEntity';

@ObjectType()
export class Question extends BaseEntity {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  content: modelDB['content'];
}

registerEnumType(QuestionDifficulty, { name: 'QuestionDifficulty' });
