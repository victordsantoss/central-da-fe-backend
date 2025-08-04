import { Module } from '@nestjs/common';
import { ChurchController } from './controllers/church.controller';
import { PositionController } from './controllers/position.controller';
import { PrismaModule } from '../../database/database.module';
import { churchProviders } from './providers/church.provider';
import { positionProviders } from './providers/position.provider';

@Module({
  imports: [PrismaModule],
  controllers: [ChurchController, PositionController],
  providers: [...churchProviders, ...positionProviders],
  exports: [...churchProviders, ...positionProviders],
})
export class ChurchModule {}
