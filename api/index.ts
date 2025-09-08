import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { setupSwagger } from '../src/common/configs/swagger.config';
import { AllExceptionsFilter } from '../src/common/filters/all-exceptions.filter';
import { corsConfig } from '../src/common/configs/cors.config';
import { VercelRequest, VercelResponse } from '@vercel/node';

let app: any;

async function createApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        whitelist: false,
        forbidNonWhitelisted: false,
      }),
    );

    app.useGlobalFilters(new AllExceptionsFilter());

    setupSwagger(app);
    app.enableCors(corsConfig);

    await app.init();
  }
  return app;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const app = await createApp();
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(req, res);
}
