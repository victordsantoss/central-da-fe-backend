import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  Length,
  IsOptional,
  IsDateString,
  ValidateNested,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @ApiProperty({
    description: 'Rua do endereço',
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    description: 'Número do endereço',
  })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({
    description: 'Complemento do endereço',
  })
  @IsString()
  @IsOptional()
  complement?: string;

  @ApiProperty({
    description: 'Bairro',
  })
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @ApiProperty({
    description: 'Cidade',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'Estado (UF)',
  })
  @IsString()
  @Length(2, 2)
  state: string;

  @ApiProperty({
    description: 'CEP',
  })
  @IsString()
  @Length(8, 9)
  zipCode: string;
}

export class IRegisterEventRequestDto {
  @ApiProperty({
    description: 'Nome do evento',
  })
  @IsString()
  @Length(3, 255)
  name: string;

  @ApiProperty({
    description: 'Descrição do evento',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Categoria do evento',
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Se o evento é pago',
  })
  @IsBoolean()
  isPaid: boolean;

  @ApiProperty({
    description: 'Tipo de evento',
  })
  @IsString()
  mode: string;

  @ApiProperty({
    description: 'Quantidade de tickets disponíveis',
  })
  @IsNumber()
  @Type(() => Number)
  availableTickets: number;

  @ApiProperty({
    description: 'Preço do evento',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  price?: number;

  @ApiProperty({
    description: 'Data de início do evento',
  })
  @IsDateString()
  startDate: Date | string;

  @ApiProperty({
    description: 'Data de término do evento',
  })
  @IsDateString()
  endDate: Date | string;

  @ApiProperty({
    description: 'ID da igreja',
  })
  @IsString()
  @IsNotEmpty()
  churchId: string;

  @ApiProperty({
    description: 'Endereço do evento',
    type: AddressDto,
  })
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @ApiProperty({
    description: 'Link personalizado do evento',
  })
  @IsString()
  @IsOptional()
  customLink?: string;

  @ApiProperty({
    description: 'Link do Instagram do evento',
  })
  @IsString()
  @IsOptional()
  instagramLink?: string;

  @ApiProperty({
    description: 'Link do Facebook do evento',
  })
  @IsString()
  @IsOptional()
  facebookLink?: string;

  @ApiProperty({
    description: 'Link do YouTube do evento',
  })
  @IsString()
  @IsOptional()
  youtubeLink?: string;

  @ApiProperty({
    description: 'Conteúdo do evento',
  })
  @IsString()
  @IsOptional()
  content?: string;
}
