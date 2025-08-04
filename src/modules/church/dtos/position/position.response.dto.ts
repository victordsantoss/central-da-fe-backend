import { ApiProperty } from '@nestjs/swagger';

export class IPositionResponseDto {
  @ApiProperty({
    description: 'ID único do cargo',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do cargo',
    example: 'Pastor',
  })
  name: string;
}
