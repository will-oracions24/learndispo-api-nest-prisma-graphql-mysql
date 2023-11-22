import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { QuestionDifficulty, Question as modelDB } from '@prisma/client';

@ObjectType()
export class Question {
  @Field(() => String)
  id: modelDB['id'];

  @Field(() => String)
  content: modelDB['content'];
}

registerEnumType(QuestionDifficulty, { name: 'QuestionDifficulty' });
