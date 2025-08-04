import { ApiProperty } from '@nestjs/swagger';
import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IPositionResponseDto } from './position.response.dto';

export class IListPositionsResponseDto extends BasePaginationResponseDto<IPositionResponseDto> {
  @ApiProperty({
    description: 'Lista de cargos',
    type: [IPositionResponseDto],
  })
  data: IPositionResponseDto[];
}
