import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders = [
    {
      id: 1,
      amount: 144,
      orderItems: [
        { id: 1, productId: 1 },
        { id: 2, productId: 2 },
      ],
    },
    {
      id: 2,
      amount: 453,
      orderItems: [
        { id: 3, productId: 1 },
        { id: 4, productId: 3 },
      ],
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
}
