import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

@InputType()
export class UpdateUsersInput {
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 255)
  firstName?: string;

  @IsOptional()
  @IsNotEmpty()
  @Length(2, 255)
  lastName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;
}