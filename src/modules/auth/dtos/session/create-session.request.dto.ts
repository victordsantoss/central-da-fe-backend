import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsDate, IsBoolean } from 'class-validator';

export class CreateSessionRequestDto {
  @ApiProperty({
    description: 'Usuário',
  })
  userId: string;

  @ApiProperty({
    description: 'Token de autenticação',
  })
  @IsEmail()
  token: string;

  @ApiProperty({
    description: 'Se a sessão está ativa',
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'Data de fim da sessão (null se a sessão está ativa)',
  })
  @IsDate()
  endDate: Date;

  @ApiProperty({
    description: 'Data de início da sessão',
  })
  @IsDate()
  startDate: Date;
}
