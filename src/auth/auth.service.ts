import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
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
				'User with this login already exists',
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


	async login(userDto: CreateUserDto) {
		const user = await this.validateUser(userDto);
		return this.generateToken(user);
		
	}


	private async generateToken(user: User){
		const payload = { 
			id: user.id, 
			name: user.name, 
			login: user.login, 
			email: user.email,
			date: user.createdAt
		};
		return {
			token: this.jwtService.sign(payload),
			payload: payload
		}
	}


	private async validateUser(userDto: CreateUserDto){
		const user = await this.userService.getUserByLogin(userDto.login);
			if(!user){
			throw new HttpException(
				'Incorrect login',
				HttpStatus.UNAUTHORIZED,
			);
		}
		const passEquals = await compare(userDto.password, user.password);
		if(user && passEquals){
			return user
		}
			throw new UnauthorizedException({message: 'Incorrect password!'});
	}
}
