import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UsersService } from 'src/services/users.service';
import { hash, compare } from 'bcryptjs';
import { User } from 'src/models/users.model';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UsersService
		){}

	async registration(userDto: CreateUserDto){
		const candidate = await this.userService.getUserByLogin(userDto.login);
		if(candidate){
			throw new HttpException(
				'User with this email already exists',
				HttpStatus.BAD_REQUEST,
			);
		}
		const hashPassword = await hash(userDto.password, 5);
		const user = await this.userService.createUser({
			...userDto,
			password: hashPassword,
		});
		return this.generateToken(user);
	}

	private async generateToken(user: User){
		const payload = { 
			id: user.id, 
			name: user.name, 
			login: user.login, 
			email: user.email
		};
		return {
			token: this.jwtService.sign(payload)
		}
	}
}
