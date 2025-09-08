import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { IGetEventService } from './get.interface';
import { IEventResponseDto } from '../../../dtos/event/event.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import {
  EventCategory,
  EventStatus,
} from '../../../../../common/enums/event.enum';
import { EventsWithChurchAndAddress } from '../../../../event/types/event.types';

@Injectable()
export class GetEventService implements IGetEventService {
  private readonly logger = new Logger(GetEventService.name);

  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async perform(id: string): Promise<IEventResponseDto> {
    this.logger.log(`Buscando evento por ID: ${id}`);

    const event = await this.eventRepository.findByIdWithIncludes(id);

    if (!event) {
      this.logger.warn(`Evento não encontrado com ID: ${id}`);
      throw new NotFoundException('Evento não encontrado');
    }

    return this.mapEventToResponse(event);
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
      status: event.status as EventStatus,
      category: event.category as EventCategory,
      price: event.price?.toNumber() || 0,
      startDate: event.startDate,
      customLink: event.customLink,
      instagramLink: event.instagramLink,
      facebookLink: event.facebookLink,
      youtubeLink: event.youtubeLink,
      endDate: event.endDate,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      churchName: event.church.name,
      addressName: address,
    };
  }
}
