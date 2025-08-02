import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './common/configs/swagger.config';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { corsConfig } from './common/configs/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());

  setupSwagger(app);
  app.enableCors(corsConfig);

  await app.listen(3000);
}

// For local development
if (require.main === module) {
  bootstrap();
}

// For Vercel serverless deployment
export default async function handler(req: any, res: any) {
  if (!global.__app) {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    app.useGlobalFilters(new AllExceptionsFilter());

    setupSwagger(app);
    app.enableCors(corsConfig);

    await app.init();
    global.__app = app;
  }

  return global.__app.getHttpAdapter().getInstance()(req, res);
}
