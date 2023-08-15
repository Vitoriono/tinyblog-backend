import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller({path: 'account'})
export class AuthController {
	constructor(private readonly authService: AuthService){}

	

	@Post('reg')
	regist(@Body() userDto: CreateUserDto){
		return this.authService.registration(userDto);
	}

}
