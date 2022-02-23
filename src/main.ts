import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO : validationPipe 检验器
  // 需要配合 `class-validator` 包使用
  // whitelists: 白名单功能，例如更新时自动删除多余的字段。
  // transform: 参数转换为类型实例，支持数字、布尔值、字符串以及自定义类型。
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  );
  await app.listen(3000);
}
bootstrap();
