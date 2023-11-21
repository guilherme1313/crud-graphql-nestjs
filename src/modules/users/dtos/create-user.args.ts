import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class UsersArgs {
  id: string;
}