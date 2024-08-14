import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import {
  FindOneProductDto,
  FindProductsByIdsDto,
  Product,
  Products,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }
  findOneProduct(
    request: FindOneProductDto,
  ): Promise<Product> | Observable<Product> | Product {
    return this.productService.findOneProduct(request.id);
  }
  findProductsByIds(request: FindProductsByIdsDto): Observable<Product> {
    return this.productService.findProductsByIds(request.productIds);
  }
}
