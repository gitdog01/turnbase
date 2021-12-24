import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getCurrentUser() {
    return this.usersService.getCurrentUser();
  }

  @Get('/login')
  login() {
    return this.usersService.login();
  }

  @Post('/register')
  register() {
    return this.usersService.register();
  }

  @Get('/logout')
  logout() {
    return this.usersService.logout();
  }
}
