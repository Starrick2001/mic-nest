import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Shoes', price: '56.00' },
    { id: 2, name: 'Cheese', price: '88.00' },
    { id: 3, name: 'Shirt', price: '397.00' },
    { id: 4, name: 'Keyboard', price: '228.00' },
    { id: 5, name: 'Chair', price: '810.00' },
    { id: 6, name: 'Hat', price: '526.00' },
    { id: 7, name: 'Keyboard', price: '92.00' },
    { id: 8, name: 'Hat', price: '128.00' },
    { id: 9, name: 'Pants', price: '534.00' },
    { id: 10, name: 'Pizza', price: '360.00' },
  ];
  getHello(): string {
    return 'Hello World!';
  }
}
