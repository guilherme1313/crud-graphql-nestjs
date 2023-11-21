import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { NotFoundException } from '@nestjs/common';
import { NewUsersInput } from './dtos/create-user.input';
import { Users } from './entities/users.entity';

@Resolver(of => Users)
export class UsersResolver {
  constructor(
    private readonly _usersService: UsersService,
  ) {}

  @Query(returns => Users)
  async findOneById(@Args('id', { type: () => Int }) id: number) {
    return await this._usersService.findOneById(id);
  }

  @Query(returns => [Users])
  async findAll() {
    return await this._usersService.findAll();
  }

  @Mutation(returns => Users)
  async create(@Args('newUserData') newUserData: NewUsersInput) {
    return await this._usersService.create(newUserData);
  }

  @Mutation(returns => Boolean)
  async delete(@Args('id') id: number) {
    return this._usersService.delete(id);
  }
}