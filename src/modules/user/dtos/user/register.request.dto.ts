import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class IRegisterUserRequestDto {
  @ApiProperty({
    description: 'Nome do usuário',
  })
  @IsString()
  @Length(3, 255)
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'ID do perfil do usuário',
  })
  @IsOptional()
  roleId?: string;

  @ApiProperty({
    description: 'CPF do usuário',
  })
  @IsString()
  cpf: string;

  @ApiProperty({
    description: 'Senha do usuário',
  })
  @IsString()
  @Length(8, 255)
  password: string;
}
