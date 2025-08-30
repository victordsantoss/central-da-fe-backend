import { EventRepository } from '../repositories/event.repository';
import { EventService } from '../services/event/list/list.service';

export const eventProviders = [
  {
    provide: 'IListEventsService',
    useClass: EventService,
  },
  {
    provide: 'IEventRepository',
    useClass: EventRepository,
  },
];
