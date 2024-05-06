import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProductoModule } from './modules/producto/producto.module';
import Config from './Modules/Config/config.module';

@Module({
  imports: [
    Config,
    AuthModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
