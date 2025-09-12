import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/database.module';
import { EventController } from './controllers/event.controller';
import { eventProviders } from './providers/event.provider';
import { CommonModule } from 'src/common/common.module';
import { CodeGenerator } from 'src/common/core/utils/code.utils';
@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [EventController],
  providers: [...eventProviders, CodeGenerator],
  exports: [...eventProviders],
})
export class EventModule {}
