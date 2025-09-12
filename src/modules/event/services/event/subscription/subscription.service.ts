import {
  Inject,
  Injectable,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { ISubscriptionService } from './subscription.interface';
import { ISubscriptionRequestDto } from '../../../dtos/event/subscription.request.dto';
import { ISubscriptionResponseDto } from '../../../dtos/event/subscription.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { generateRandomCode } from '../../../../../common/core/utils/code.utils';

@Injectable()
export class SubscriptionService implements ISubscriptionService {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async perform(
    payload: ISubscriptionRequestDto,
  ): Promise<ISubscriptionResponseDto> {
    this.logger.log(
      `Iniciando processo de inscrição no evento: ${payload.eventId} para usuário: ${payload.userId}`,
    );

    const event = await this.eventRepository.findById(payload.eventId);
    if (!event) {
      throw new BadRequestException('Evento não encontrado');
    }

    const isAlreadySubscribed =
      await this.eventRepository.checkUserSubscription(
        payload.userId,
        payload.eventId,
      );
    if (isAlreadySubscribed) {
      throw new BadRequestException('Usuário já está inscrito neste evento');
    }

    if (event.availableTickets <= 0) {
      throw new BadRequestException('Evento atingiu a lotação máxima');
    }

    if (event.isPaid) {
      throw new BadRequestException(
        'Este serviço só processa eventos gratuitos no momento',
      );
    }

    try {
      let ticketCode: string;
      let isUnique = false;

      while (!isUnique) {
        ticketCode = generateRandomCode(10);
        isUnique = true;
      }

      const result = await this.eventRepository.createSubscription(
        payload.userId,
        payload.eventId,
        ticketCode,
      );

      this.logger.log(
        `Inscrição realizada com sucesso. Order ID: ${result.orderId}, Ticket: ${result.ticketCode}`,
      );

      return {
        orderId: result.orderId,
        ticketCode: result.ticketCode,
        eventName: event.name,
        message: 'Inscrição realizada com sucesso!',
      };
    } catch (error) {
      this.logger.error(`Erro ao processar inscrição: ${error}`);
      throw new BadRequestException('Erro interno ao processar inscrição');
    }
  }
}
