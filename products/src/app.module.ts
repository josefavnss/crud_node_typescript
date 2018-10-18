import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://josefa:123abc@ds129003.mlab.com:29003/nlaborie')
  ]
})
export class AppModule {}
