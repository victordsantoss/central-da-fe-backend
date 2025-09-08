import { IGetEventService } from './get.interface';
import { IEventResponseDto } from '../../../dtos/event/event.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
export declare class GetEventService implements IGetEventService {
    private readonly eventRepository;
    private readonly logger;
    constructor(eventRepository: IEventRepository);
    perform(id: string): Promise<IEventResponseDto>;
    private mapEventToResponse;
}
