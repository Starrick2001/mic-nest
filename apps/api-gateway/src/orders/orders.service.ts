import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ORDER_SERVICE,
  ORDER_SERVICE_NAME,
  OrderServiceClient,
} from '@app/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class OrdersService implements OnModuleInit {
  private orderService: OrderServiceClient;
  constructor(
    @Inject(ORDER_SERVICE)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.orderService =
      this.client.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return this.orderService.findOneOrder({ id });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
