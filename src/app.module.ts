import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoffeesModule, AuthModule, UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
