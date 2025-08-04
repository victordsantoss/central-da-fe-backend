import { PositionRepository } from '../repositories/position/position.repository';
import { PositionService } from '../services/position/list/position.service';

export const positionProviders = [
  {
    provide: 'IListPositionsService',
    useClass: PositionService,
  },
  {
    provide: 'IPositionRepository',
    useClass: PositionRepository,
  },
];
