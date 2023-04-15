import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
