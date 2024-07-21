import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER, ORDER_SERVICE } from '@app/common';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: ORDER,
          protoPath: join(__dirname, '..', 'proto', 'order.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
