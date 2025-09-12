import { Event, Prisma } from '@prisma/client';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IBaseRepository } from '../../../common/core/repositories/base.repository.interface';
import {
  EventsWithChurchAndAddress,
  EventSubscriptionResult,
} from '../types/event.types';

export interface IEventRepository extends IBaseRepository<Event> {
  createWithAddress(
    eventData: Omit<Prisma.EventCreateInput, 'address'>,
    addressData: Prisma.AddressCreateInput,
  ): Promise<Event>;
  findByFilters(
    filters: IListEventsRequestDto,
  ): Promise<[EventsWithChurchAndAddress[], number]>;
  findByIdWithIncludes(id: string): Promise<EventsWithChurchAndAddress | null>;
  createSubscription(
    userId: string,
    eventId: string,
    ticketCode: string,
  ): Promise<EventSubscriptionResult>;
  checkUserSubscription(userId: string, eventId: string): Promise<boolean>;
}
