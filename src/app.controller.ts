import { Controller, Get, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';

// router

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('help/:id')
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }
}
