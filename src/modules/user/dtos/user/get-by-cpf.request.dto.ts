import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Matches } from 'class-validator';

export class IGetUserByCpfRequestDto {
  @ApiProperty({
    description: 'CPF do usuário',
    example: '123.456.789-00',
  })
  @IsString()
  @Length(14, 14)
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'CPF inválido. Use o formato: 123.456.789-00',
  })
  cpf: string;
}
