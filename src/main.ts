import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 없는 값은 거르고 에러 메세지 출력
      forbidNonWhitelisted: true, // DTO에 존재하지 않는 값이 들어오면 에러 메세지 출력
      transform: true, // 타입 변경
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
