import { IEventResponseDto } from '../../../dtos/event/event.response.dto';

export interface IGetEventService {
  perform(id: string): Promise<IEventResponseDto>;
}
