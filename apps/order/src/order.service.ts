import {
  Order,
  PRODUCT_SERVICE,
  PRODUCT_SERVICE_NAME,
  ProductServiceClient,
} from '@app/common';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  catchError,
  concatAll,
  concatMap,
  from,
  mergeMap,
  Observable,
  of,
  throwError,
  toArray,
} from 'rxjs';

@Injectable()
export class OrderService implements OnModuleInit {
  private orders: Order[] = [
    {
      id: 1,
      amount: 144,
      orderItems: {
        orderItems: [
          { id: 1, productId: 1 },
          { id: 2, productId: 2 },
        ],
      },
      products: [],
    },
    {
      id: 2,
      amount: 453,
      orderItems: {
        orderItems: [
          { id: 3, productId: 1 },
          { id: 4, productId: 3 },
        ],
      },
      products: [],
    },
  ];
  private productService: ProductServiceClient;
  constructor(
    @Inject(PRODUCT_SERVICE)
    private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
  }
  getHello(): string {
    return 'Hello World!';
  }
  findOne(id: number): Observable<Order> {
    const order = this.orders.find((o) => o.id === id);

    const productIds = order.orderItems.orderItems.map((i) => i.productId);
    return from(this.productService.findProductsByIds({ productIds })).pipe(
      mergeMap((v) => of(v)),
      toArray(),
      mergeMap((products) => {
        console.log({ products: products });

        return of({ ...order, products: products });
      }),
      catchError((err) => {
        console.log(err);

        return throwError(() => new InternalServerErrorException(err));
      }),
    );
  }
}
