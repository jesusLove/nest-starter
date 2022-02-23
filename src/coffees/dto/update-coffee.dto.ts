import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// 所有字段转为可选类型，为字段添加 `@IsOptional()` 装饰器
// 同时还会获取 CreateCoffeeDto 校验规则
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
