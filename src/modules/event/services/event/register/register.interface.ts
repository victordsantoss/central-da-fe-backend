import { IRegisterEventRequestDto } from '../../../dtos/event/register.request.dto';
import { Event } from '@prisma/client';

export interface IRegisterEventService {
  perform(payload: IRegisterEventRequestDto): Promise<Event>;
}
