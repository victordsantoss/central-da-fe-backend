import { Event, Order, Prisma, Ticket } from '@prisma/client';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IBaseRepository } from '../../../common/core/repositories/base.repository.interface';
import { EventsWithChurchAndAddress } from '../types/event.types';
export interface IEventRepository extends IBaseRepository<Event> {
    createWithAddress(eventData: Omit<Prisma.EventCreateInput, 'address'>, addressData: Prisma.AddressCreateInput): Promise<Event>;
    findByFilters(filters: IListEventsRequestDto): Promise<[EventsWithChurchAndAddress[], number]>;
    findByIdWithIncludes(id: string): Promise<EventsWithChurchAndAddress | null>;
    createOrder(userId: string, eventId: string): Promise<Order>;
    createTicket(orderId: string, ticketCode: string): Promise<Ticket>;
    checkUserSubscription(userId: string, eventId: string): Promise<boolean>;
}
