import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class NewUsersInput {
  @Length(2, 255)
  firstName: string;

  @Length(2, 255)
  lastName: string;

  @IsEmail()
  email: string;
}