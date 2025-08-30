import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BasePaginationRequestDto } from '../../../../common/core/dtos/base-pagination.dto';

export class IListEventsRequestDto extends BasePaginationRequestDto {
  @ApiProperty({
    description: 'Nome ou descrição do evento',
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;
}
