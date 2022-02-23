import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Module({
  // 这里使用 forFeature()
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeesService],
  controllers: [CoffeesController]
})
export class CoffeesModule {}
