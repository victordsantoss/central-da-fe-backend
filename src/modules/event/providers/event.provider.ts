import { EventRepository } from '../repositories/event.repository';
import { EventService } from '../services/event/list/list.service';
import { GetEventService } from '../services/event/get/get.service';
import { RegisterEventService } from '../services/event/register/register.service';
import { SubscriptionService } from '../services/event/subscription/subscription.service';

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
    provide: 'IRegisterEventService',
    useClass: RegisterEventService,
  },
  {
    provide: 'ISubscriptionService',
    useClass: SubscriptionService,
  },
  {
    provide: 'IEventRepository',
    useClass: EventRepository,
  },
];
