import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRequestDto } from '../dto/user.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getCurrentUser() {
    return this.usersService.getCurrentUser();
  }

  @Get('/login')
  async login(@Body() body: UserRequestDto) {
    return await this.usersService.login(body);
  }

  @Post('/register')
  async register(@Body() body: UserRequestDto) {
    return await this.usersService.register(body);
  }

  @Get('/logout')
  logout() {
    return this.usersService.logout();
  }
}
