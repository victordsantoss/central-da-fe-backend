import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IEventResponseDto } from './event.response.dto';
export declare class IListEventsResponseDto extends BasePaginationResponseDto<IEventResponseDto> {
    data: IEventResponseDto[];
}
