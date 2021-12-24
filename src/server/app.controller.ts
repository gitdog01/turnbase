import { Controller, Post, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
// router

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('help/:id')
  create(): string {
    return this.appService.getHello();
  }
}
