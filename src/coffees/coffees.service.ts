import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'lee',
      brand: 'haier',
      flavors: ['aa', 'bb']
    }
  ];
  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  create(createCoffeeDto) {
    return this.coffees.push(createCoffeeDto);
  }
  update(id: string, updateCoffeeData: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // 更新
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
