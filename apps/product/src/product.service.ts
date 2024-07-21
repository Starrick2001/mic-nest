import { Product, Products } from '@app/common';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Shoes', price: 56 },
    { id: 2, name: 'Cheese', price: 88 },
    { id: 3, name: 'Shirt', price: 397 },
    { id: 4, name: 'Keyboard', price: 228 },
    { id: 5, name: 'Chair', price: 810 },
    { id: 6, name: 'Hat', price: 526 },
    { id: 7, name: 'Keyboard', price: 92 },
    { id: 8, name: 'Hat', price: 128 },
    { id: 9, name: 'Pants', price: 534 },
    { id: 10, name: 'Pizza', price: 360 },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  findOneProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }

  findProductsByIds(ids: number[]): Products {
    throw new RpcException('Product service error');
    return { products: this.products.filter((p) => ids.includes(p.id)) };
  }
}
