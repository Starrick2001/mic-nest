import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get<ConfigService>(ConfigService);
  console.log(configService.get<string>('AUHT_APP_PORT'));

  await app.listen(+configService.get<string>('AUHT_APP_PORT'));
}
bootstrap();
