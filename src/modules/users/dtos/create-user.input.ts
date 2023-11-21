import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class NewUsersInput {
  @IsNotEmpty()
  @Length(2, 255)
  firstName: string;

  @IsNotEmpty()
  @Length(2, 255)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}