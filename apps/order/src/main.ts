import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(+configService.get<string>('ORDER_APP_PORT'));
}
bootstrap();
