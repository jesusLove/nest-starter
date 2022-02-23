import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavors.entity';

@Module({
  // 这里使用 forFeature()
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  providers: [CoffeesService],
  controllers: [CoffeesController]
})
export class CoffeesModule {}
