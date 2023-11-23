import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @MinLength(3)
  @Field()
  username: string;

  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @MinLength(3)
  @Field()
  password: string;
}
