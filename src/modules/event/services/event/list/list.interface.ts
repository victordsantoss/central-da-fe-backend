import { IListEventsRequestDto } from '../../../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../../../dtos/event/list.response.dto';

export interface IListEventsService {
  perform(query: IListEventsRequestDto): Promise<IListEventsResponseDto>;
}
