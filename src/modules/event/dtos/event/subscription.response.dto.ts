import { ApiProperty } from '@nestjs/swagger';

export class ISubscriptionResponseDto {
  @ApiProperty({
    description: 'ID do pedido criado',
    example: 'clxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  })
  orderId: string;

  @ApiProperty({
    description: 'Código do ingresso gerado',
    example: 'ABC123XYZ0',
  })
  ticketCode: string;

  @ApiProperty({
    description: 'Nome do evento',
    example: 'Conferência de Jovens 2025',
  })
  eventName: string;

  @ApiProperty({
    description: 'Mensagem de confirmação',
    example: 'Inscrição realizada com sucesso!',
  })
  message: string;
}
