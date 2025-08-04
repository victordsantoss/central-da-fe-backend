import { ChurchRepository } from '../repositories/church/church.repository';
import { ChurchService } from '../services/church/list/list.service';

export const churchProviders = [
  {
    provide: 'IListChurchesService',
    useClass: ChurchService,
  },
  {
    provide: 'IChurchRepository',
    useClass: ChurchRepository,
  },
];
