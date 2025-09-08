import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IChurchResponseDto } from './church.response.dto';
export declare class IListChurchesResponseDto extends BasePaginationResponseDto<IChurchResponseDto> {
    data: IChurchResponseDto[];
}
