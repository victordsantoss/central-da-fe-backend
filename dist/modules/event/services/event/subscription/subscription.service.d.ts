import { ISubscriptionService } from './subscription.interface';
import { ISubscriptionResponseDto } from '../../../dtos/event/subscription.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { CodeGenerator } from 'src/common/core/utils/code.utils';
import { ISubscriptionRequestDto } from 'src/modules/event/dtos/event/subscription.request.dto';
export declare class SubscriptionService implements ISubscriptionService {
    private readonly eventRepository;
    private readonly codeGenerator;
    private readonly logger;
    private readonly CODE_LENGTH;
    constructor(eventRepository: IEventRepository, codeGenerator: CodeGenerator);
    perform(payload: ISubscriptionRequestDto): Promise<ISubscriptionResponseDto>;
    private validateEvent;
    private validateSubscription;
    private validateAvailableTickets;
}
