import { EventRepository } from '../repositories/event.repository';
import { EventService } from '../services/event/list/list.service';
import { GetEventService } from '../services/event/get/get.service';
import { RegisterEventService } from '../services/event/register/register.service';
export declare const eventProviders: ({
    provide: string;
    useClass: typeof EventService;
} | {
    provide: string;
    useClass: typeof GetEventService;
} | {
    provide: string;
    useClass: typeof RegisterEventService;
} | {
    provide: string;
    useClass: typeof EventRepository;
})[];
