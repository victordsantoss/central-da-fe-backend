import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IListPositionsRequestDto } from '../dtos/position/list.request.dto';
import { IListPositionsResponseDto } from '../dtos/position/list.response.dto';
import { IListPositionsService } from '../services/position/list/list.interface';

@ApiTags('Position')
@Controller('position')
export class PositionController {
  constructor(
    @Inject('IListPositionsService')
    private readonly listPositionsService: IListPositionsService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Listar cargos com paginação',
    description:
      'Retorna uma lista paginada de cargos com filtro opcional por nome',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de cargos retornada com sucesso',
    type: IListPositionsResponseDto,
  })
  async findAll(
    @Query() query: IListPositionsRequestDto,
  ): Promise<IListPositionsResponseDto> {
    return this.listPositionsService.perform(query);
  }
}
