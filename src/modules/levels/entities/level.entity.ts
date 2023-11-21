import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Level {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
