import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(+configService.get<string>('PRODUCT_APP_PORT'));
}
bootstrap();
