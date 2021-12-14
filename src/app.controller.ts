import { Controller, Post, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
// router

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('help/:id')
  create(@Req() request: Request, @Body() data: CreateUserDto): string {
    return this.appService.getHello();
  }
}
