import { Event } from '@prisma/client';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IBaseRepository } from '../../../common/core/repositories/base.repository.interface';
import { EventsWithChurchAndAddress } from '../types/event.types';

export interface IEventRepository extends IBaseRepository<Event> {
  findByFilters(
    filters: IListEventsRequestDto,
  ): Promise<[EventsWithChurchAndAddress[], number]>;
}
