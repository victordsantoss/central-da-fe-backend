import { ISubscriptionRequestDto } from 'src/modules/event/dtos/event/subscription.request.dto';
import { ISubscriptionResponseDto } from 'src/modules/event/dtos/event/subscription.response.dto';
export interface ISubscriptionService {
    perform(payload: ISubscriptionRequestDto): Promise<ISubscriptionResponseDto>;
}
