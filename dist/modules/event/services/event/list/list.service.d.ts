import { IListEventsService } from './list.interface';
import { IListEventsRequestDto } from '../../../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../../../dtos/event/list.response.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
export declare class EventService implements IListEventsService {
    private readonly eventRepository;
    private readonly logger;
    constructor(eventRepository: IEventRepository);
    perform(query: IListEventsRequestDto): Promise<IListEventsResponseDto>;
    private mapEventToResponse;
}
