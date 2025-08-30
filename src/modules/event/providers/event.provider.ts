import { EventRepository } from '../repositories/event.repository';
import { EventService } from '../services/event/list/list.service';
import { RegisterEventService } from '../services/event/register/register.service';

export const eventProviders = [
  {
    provide: 'IListEventsService',
    useClass: EventService,
  },
  {
    provide: 'IRegisterEventService',
    useClass: RegisterEventService,
  },
  {
    provide: 'IEventRepository',
    useClass: EventRepository,
  },
];
