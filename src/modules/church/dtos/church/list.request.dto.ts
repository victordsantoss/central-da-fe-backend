import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BasePaginationRequestDto } from '../../../../common/core/dtos/base-pagination.dto';

export class IListChurchesRequestDto extends BasePaginationRequestDto {
  @ApiProperty({
    description: 'Nome ou descrição da igreja',
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;
}
