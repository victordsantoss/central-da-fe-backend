import { ISubscriptionRequestDto } from '../../../dtos/event/subscription.request.dto';
import { ISubscriptionResponseDto } from '../../../dtos/event/subscription.response.dto';

export interface ISubscriptionService {
  perform(payload: ISubscriptionRequestDto): Promise<ISubscriptionResponseDto>;
}
