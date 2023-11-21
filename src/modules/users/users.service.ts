import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { NewUsersInput } from './dtos/create-user.input';
import { Users } from './entities/users.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService{
    constructor(
    @InjectModel(Users)
    private readonly _users: typeof Users
    ){}

    async findOneById(id: number){
        const result = await this._users.findByPk(id);
        if (!result) {
          throw new NotFoundException(`Usuário de ID: ${id} não encontrado!`);
        }
        return result;
    }

    async findAll(){
        const result = await this._users.findAll();

        if (!result.length) {
          throw new NotFoundException("Não possui usuários cadastrados!");
        }
        return result;
    }

    async create(newUserData: NewUsersInput){
       try {
         const exist = await this._users.findOne({
            where: {
                email: newUserData.email
            }
         });

         if(exist){
            throw new BadRequestException('Usuário já está cadastrado!');
         }
         const user = await this._users.create(newUserData as any);
         const save = await user.save();
        if (save) {
          return save;
        } else {
          throw new BadRequestException('Erro ao cadastrar usuário, tente novamente!');
        }
       } catch (error) {
        throw new BadRequestException(error.message);
       }
    }

    async delete(id: number){
       const user =  await this._users.findByPk(id);

       if(!user){
        throw new NotFoundException("Usuário não existe!");
      }
  
      await user.destroy();
      const exist =  await this._users.findByPk(id);

      return exist ? false: true;
    }
}