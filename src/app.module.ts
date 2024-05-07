import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProductoModule } from './modules/producto/producto.module';
import Config from './Modules/Config/config.module';
import { AuthGuard } from './Interceptors_Guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from './modules/auth/auth.service';
@Module({
  imports: [
    Config,
    AuthModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide:APP_GUARD,
      useClass:AuthGuard
    },
    AuthService,
  ],
})
export class AppModule {}
