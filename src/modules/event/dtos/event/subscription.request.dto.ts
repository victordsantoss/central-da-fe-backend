import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export interface ISubscriptionRequestDto {
  userId: string;
  eventId: string;
}

export class SubscriptionRequestDto implements ISubscriptionRequestDto {
  @ApiProperty({
    description: 'ID do usuário que está se inscrevendo no evento',
    example: 'clxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'ID do evento para inscrição',
    example: 'clxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  eventId: string;
}
