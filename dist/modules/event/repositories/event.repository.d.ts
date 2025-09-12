import { Event, Order, Prisma, Ticket } from '@prisma/client';
import { BaseRepository } from '../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../database/core/prisma.service';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IEventRepository } from './event.repository.interface';
import { EventsWithChurchAndAddress, EventSubscriptionResult } from '../types/event.types';
export declare class EventRepository extends BaseRepository<Event> implements IEventRepository {
    constructor(prisma: PrismaService);
    createWithAddress(eventData: Omit<Prisma.EventCreateInput, 'address'>, addressData: Prisma.AddressCreateInput): Promise<Event>;
    findByFilters(filters: IListEventsRequestDto): Promise<[EventsWithChurchAndAddress[], number]>;
    findByIdWithIncludes(id: string): Promise<EventsWithChurchAndAddress | null>;
    createOrder(userId: string, eventId: string): Promise<Order>;
    createTicket(orderId: string, ticketCode: string): Promise<Ticket>;
    createSubscription(userId: string, eventId: string, ticketCode: string): Promise<EventSubscriptionResult>;
    checkUserSubscription(userId: string, eventId: string): Promise<boolean>;
}
