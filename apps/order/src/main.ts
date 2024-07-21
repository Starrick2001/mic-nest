import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ORDER } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '..', 'proto', 'order.proto'),
        package: ORDER,
        url: 'localhost:5000',
      },
    },
  );
  await app.listen();
}
bootstrap();
