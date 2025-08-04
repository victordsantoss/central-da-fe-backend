import { ApiProperty } from '@nestjs/swagger';

export class IChurchResponseDto {
  @ApiProperty({
    description: 'ID único da igreja',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nome da igreja',
    example: 'Igreja Batista',
  })
  name: string;
}
