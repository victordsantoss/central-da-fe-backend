import { Inject, Injectable, Logger } from '@nestjs/common';
import { IListEventsService } from './list.interface';
import { IEventResponseDto } from '../../../dtos/event/event.response.dto';
import { IListEventsRequestDto } from '../../../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../../../dtos/event/list.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { EventCategory, EventStatus } from '../../../../../common/enums/event.enum';
import { EventsWithChurchAndAddress } from '../../../../event/types/event.types';

@Injectable()
export class EventService implements IListEventsService {
  private readonly logger = new Logger(EventService.name);
  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) { }

  async perform(query: IListEventsRequestDto): Promise<IListEventsResponseDto> {
    const { page, limit, search } = query;
    this.logger.log(`Listando eventos com paginação: ${page} e ${limit}`);

    const [events, total] = await this.eventRepository.findByFilters({
      page,
      limit,
      search,
    });

    return {
      data: events.map((event) => this.mapEventToResponse(event)),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private mapEventToResponse(
    event: EventsWithChurchAndAddress,
  ): IEventResponseDto {
    this.logger.log(`Mapeando resposta do evento: ${event.name}`);
    const address = `${event.address.street}, ${event.address.number} - ${event.address.neighborhood}, ${event.address.city}`;

    return {
      id: event.id,
      name: event.name,
      description: event.description,
      content: event.content,
      customLink: event.customLink,
      instagramLink: event.instagramLink,
      facebookLink: event.facebookLink,
      youtubeLink: event.youtubeLink,
      status: event.status as EventStatus,
      category: event.category as EventCategory,
      price: event.price?.toNumber() || 0,
      startDate: event.startDate,
      endDate: event.endDate,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      churchName: event.church.name,
      addressName: address,
    };
  }
}
