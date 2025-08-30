import { EventRepository } from '../repositories/event.repository';
import { EventService } from '../services/event/list/list.service';
import { GetEventService } from '../services/event/get/get.service';

export const eventProviders = [
  {
    provide: 'IListEventsService',
    useClass: EventService,
  },
  {
    provide: 'IGetEventService',
    useClass: GetEventService,
  },
  {
    provide: 'IEventRepository',
    useClass: EventRepository,
  },
];
