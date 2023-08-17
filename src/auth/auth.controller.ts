import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/auth/dtos/create.user.dto';
import { ReadUserDto } from './dtos/read.user.dto';

@Controller({ path: 'account' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('reg')
  async regist(
    @Body() userDto: CreateUserDto,
  ): Promise<ReadUserDto | undefined> {
    try {
      return this.authService.registration(userDto);
    } catch (error) {
      console.debug(error);
    }
  }

  @Post('login')
  async login(
    @Body() userDto: CreateUserDto,
  ): Promise<ReadUserDto | undefined> {
    return this.authService.login(userDto);
  }
}
