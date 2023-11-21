import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    AutoIncrement,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Table,
  } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'users' })
export class Users extends Model{
    @Field(() => ID)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    firstName: string;
  
   @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    lastName: string;

   @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    email: string;
}