import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT, PRODUCT_SERVICE } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: PRODUCT,
          // protoPath: join(__dirname, '../product.proto'),
          protoPath: join(__dirname, '..', 'proto', 'product.proto'),
          url: 'localhost:5001',
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
