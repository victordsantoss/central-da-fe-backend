import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsConfig: CorsOptions = {
  origin: ['https://central-da-fe-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'Accept-Language',
    'Cache-Control',
    'Pragma',
    'Priority',
    'Sec-Fetch-Dest',
    'Sec-Fetch-Mode',
    'Sec-Fetch-Site',
    'User-Agent',
    'Origin',
    'Referer',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false,
};
