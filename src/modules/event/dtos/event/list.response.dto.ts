import { ApiProperty } from '@nestjs/swagger';
import { BasePaginationResponseDto } from '../../../../common/core/dtos/base-pagination.dto';
import { IEventResponseDto } from './event.response.dto';

export class IListEventsResponseDto extends BasePaginationResponseDto<IEventResponseDto> {
  @ApiProperty({
    description: 'Lista de eventos',
    type: [IEventResponseDto],
  })
  data: IEventResponseDto[];
}
