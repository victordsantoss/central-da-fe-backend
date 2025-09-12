import {
  Inject,
  Injectable,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { ISubscriptionService } from './subscription.interface';
import { ISubscriptionResponseDto } from '../../../dtos/event/subscription.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { Event } from '@prisma/client';
import { CodeGenerator } from 'src/common/core/utils/code.utils';
import { ISubscriptionRequestDto } from 'src/modules/event/dtos/event/subscription.request.dto';

@Injectable()
export class SubscriptionService implements ISubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);
  private readonly CODE_LENGTH = 10;

  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
    private readonly codeGenerator: CodeGenerator,
  ) {}

  async perform(
    payload: ISubscriptionRequestDto,
  ): Promise<ISubscriptionResponseDto> {
    this.logger.log(
      `Iniciando processo de inscrição no evento: ${payload.eventId} para usuário: ${payload.userId}`,
    );

    await this.validateSubscription(payload.userId, payload.eventId);
    const event = await this.validateEvent(payload.eventId);
    this.validateAvailableTickets(event);

    if (event.isPaid) {
      throw new BadRequestException(
        'Este serviço só processa eventos gratuitos no momento',
      );
    }
    const ticketCode = this.codeGenerator.generateRandomCode(this.CODE_LENGTH); // TODO MELHORAR A LOGICA DE GERACAO DO CODIGO
    const order = await this.eventRepository.createOrder(
      payload.userId,
      payload.eventId,
    );
    const ticket = await this.eventRepository.createTicket(
      order.id,
      ticketCode,
    );

    this.logger.log(
      `Inscrição realizada com sucesso. Order ID: ${order.id}, Ticket: ${ticket.code}`,
    );
    return {
      orderId: order.id,
      ticketCode: ticket.code,
      eventName: event.name,
      message: 'Inscrição realizada com sucesso!',
    };
  }

  private async validateEvent(eventId: string): Promise<Event> {
    const event = await this.eventRepository.findById(eventId);
    if (!event) {
      throw new BadRequestException('Evento não encontrado');
    }
    return event;
  }

  private async validateSubscription(
    userId: string,
    eventId: string,
  ): Promise<void> {
    const isAlreadySubscribed =
      await this.eventRepository.checkUserSubscription(userId, eventId);
    if (isAlreadySubscribed) {
      throw new BadRequestException('Usuário já está inscrito neste evento');
    }
  }

  private validateAvailableTickets(event: Event): void {
    if (event.availableTickets <= 0) {
      throw new BadRequestException('Evento atingiu a lotação máxima');
    }
  }
}
