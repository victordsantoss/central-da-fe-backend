import { Inject, Injectable, Logger } from '@nestjs/common';
import { IRegisterEventService } from './register.interface';
import { IRegisterEventRequestDto } from '../../../dtos/event/register.request.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { Event } from '@prisma/client';
import { PrismaService } from 'src/database/core/prisma.service';
import { EventStatus } from 'src/common/enums/event.enum';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class RegisterEventService implements IRegisterEventService {
  private readonly logger = new Logger(RegisterEventService.name);
  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
    private readonly prisma: PrismaService,
  ) {}

  async perform(payload: IRegisterEventRequestDto): Promise<Event> {
    this.logger.log('Iniciando o processo de criação de evento');

    const { address, ...eventData } = payload;

    const addressData = {
      ...address,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { churchId, ...restEventData } = eventData;

    const formattedEventData = {
      ...restEventData,
      status: EventStatus.ACTIVE,
      startDate: new Date(restEventData.startDate),
      endDate: new Date(restEventData.endDate),
      price: restEventData.price ? new Decimal(restEventData.price) : 0,
      church: {
        connect: {
          id: churchId,
        },
      },
    };

    try {
      const createdEvent = await this.eventRepository.createWithAddress(
        formattedEventData,
        addressData,
      );

      this.logger.log(`Evento ${createdEvent.id} criado com sucesso`);
      return createdEvent;
    } catch (error) {
      this.logger.error(`Erro ao criar evento: ${error}`);
      throw error;
    }
  }
}
