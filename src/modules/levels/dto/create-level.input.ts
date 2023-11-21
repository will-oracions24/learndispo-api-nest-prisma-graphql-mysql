import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateLevelInput {
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @IsString()
  @MinLength(3)
  @Field()
  description: string;
}
