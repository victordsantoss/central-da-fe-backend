import { Module } from '@nestjs/common';
import { PrismaModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { ChurchModule } from './modules/church/church.module';
import { EventModule } from './modules/event/event.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    AuthModule,
    PrismaModule,
    UserModule,
    ChurchModule,
    EventModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
