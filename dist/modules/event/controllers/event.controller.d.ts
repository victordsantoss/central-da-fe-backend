import { Event } from '@prisma/client';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../dtos/event/list.response.dto';
import { IListEventsService } from '../services/event/list/list.interface';
import { IEventResponseDto } from '../dtos/event/event.response.dto';
import { IGetEventService } from '../services/event/get/get.interface';
import { IRegisterEventRequestDto } from '../dtos/event/register.request.dto';
import { IRegisterEventService } from '../services/event/register/register.interface';
import { ISubscriptionService } from '../services/event/subscription/subscription.interface';
import { ISubscriptionResponseDto } from '../dtos/event/subscription.response.dto';
import { ISubscriptionRequestDto } from '../dtos/event/subscription.request.dto';
export declare class EventController {
    private readonly listEventsService;
    private readonly getEventService;
    private readonly registerEventService;
    private readonly subscriptionService;
    constructor(listEventsService: IListEventsService, getEventService: IGetEventService, registerEventService: IRegisterEventService, subscriptionService: ISubscriptionService);
    findAll(query: IListEventsRequestDto): Promise<IListEventsResponseDto>;
    findOne(id: string): Promise<IEventResponseDto>;
    create(event: IRegisterEventRequestDto): Promise<Event>;
    subscribe(subscription: ISubscriptionRequestDto): Promise<ISubscriptionResponseDto>;
}
