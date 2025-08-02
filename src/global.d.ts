import { INestApplication } from '@nestjs/common';

declare global {
  var __app: INestApplication | undefined;
}

export { };