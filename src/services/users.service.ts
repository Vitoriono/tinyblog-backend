import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/models/users.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
   	return user;
  }

  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({
      where: { login },
      include: { all: true },
    });
    return user;
  }

}  