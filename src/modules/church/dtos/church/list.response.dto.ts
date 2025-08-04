import { ApiProperty } from '@nestjs/swagger';
import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IChurchResponseDto } from './church.response.dto';

export class IListChurchesResponseDto extends BasePaginationResponseDto<IChurchResponseDto> {
  @ApiProperty({
    description: 'Lista de igrejas',
    type: [IChurchResponseDto],
  })
  data: IChurchResponseDto[];
}
