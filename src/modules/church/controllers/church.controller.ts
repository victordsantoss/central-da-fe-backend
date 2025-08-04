import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IListChurchesRequestDto } from '../dtos/church/list.request.dto';
import { IListChurchesResponseDto } from '../dtos/church/list.response.dto';
import { IListChurchesService } from '../services/church/list/list.interface';

@ApiTags('Church')
@Controller('church')
export class ChurchController {
  constructor(
    @Inject('IListChurchesService')
    private readonly listChurchesService: IListChurchesService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Listar igrejas com paginação',
    description:
      'Retorna uma lista paginada de igrejas com filtro opcional por nome',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de igrejas retornada com sucesso',
    type: IListChurchesResponseDto,
  })
  async findAll(
    @Query() query: IListChurchesRequestDto,
  ): Promise<IListChurchesResponseDto> {
    return this.listChurchesService.perform(query);
  }
}
