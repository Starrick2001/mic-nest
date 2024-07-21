import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import {
  FindOneOrderDto,
  Order,
  OrderServiceController,
  OrderServiceControllerMethods,
} from '@app/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
@OrderServiceControllerMethods()
export class OrderController implements OrderServiceController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  findOneOrder(
    request: FindOneOrderDto,
  ): Promise<Order> | Observable<Order> | Order {
    return this.orderService.findOne(request.id);
  }
}
