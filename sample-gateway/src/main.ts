import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3001;

  const app = await NestFactory.create(AppModule);
  console.log('GateWay is listening at port', port);
  await app.listen(port);
}
bootstrap();
