import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app.module';
import { HttpExceptionFilter } from './server/common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
