import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../dtos/event/list.response.dto';
import { IListEventsService } from '../services/event/list/list.interface';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(
    @Inject('IListEventsService')
    private readonly listEventsService: IListEventsService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Listar eventos com paginação',
    description:
      'Retorna uma lista paginada de eventos com filtro opcional por nome',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de eventos retornada com sucesso',
    type: IListEventsResponseDto,
  })
  async findAll(
    @Query() query: IListEventsRequestDto,
  ): Promise<IListEventsResponseDto> {
    return this.listEventsService.perform(query);
  }
}
