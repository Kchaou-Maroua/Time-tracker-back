import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimesController } from './timers/times.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/times', TimesController); // '/times' est le préfixe de l'URL pour ces routes

  await app.listen(5173);
}
bootstrap();
