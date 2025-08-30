import { ApiProperty } from '@nestjs/swagger';
import {
  EventCategory,
  EventStatus,
} from '../../../../common/enums/event.enum';

export class IEventResponseDto {
  @ApiProperty({
    description: 'ID único do evento',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do evento',
    example: 'Evento de teste',
  })
  name: string;

  @ApiProperty({
    description: 'Descrição do evento',
    example: 'Descrição do evento de teste',
  })
  description: string;

  @ApiProperty({
    description: 'Categoria do evento',
    example: EventCategory.EVENT,
  })
  category: EventCategory;

  @ApiProperty({
    description: 'Status do evento',
    example: EventStatus.ACTIVE,
  })
  status: EventStatus;

  @ApiProperty({
    description: 'Preço do evento',
    example: 100,
  })
  price: number;

  @ApiProperty({
    description: 'Data de início do evento',
    example: '2021-01-01',
  })
  startDate: Date;

  @ApiProperty({
    description: 'Data de fim do evento',
    example: '2021-01-01',
  })
  endDate: Date;

  @ApiProperty({
    description: 'Data de criação do evento',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data de atualização do evento',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'ID da igreja',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  churchName: string;

  @ApiProperty({
    description: 'ID do endereço',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  addressName: string;
}
