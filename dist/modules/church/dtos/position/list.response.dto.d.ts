import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IPositionResponseDto } from './position.response.dto';
export declare class IListPositionsResponseDto extends BasePaginationResponseDto<IPositionResponseDto> {
    data: IPositionResponseDto[];
}
