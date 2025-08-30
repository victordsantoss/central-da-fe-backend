import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/database.module';
import { EventController } from './controllers/event.controller';
import { eventProviders } from './providers/event.provider';

@Module({
  imports: [PrismaModule],
  controllers: [EventController],
  providers: [...eventProviders],
  exports: [...eventProviders],
})
export class EventModule {}
