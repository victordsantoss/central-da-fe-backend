import { Controller, Get, Inject, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../dtos/event/list.response.dto';
import { IListEventsService } from '../services/event/list/list.interface';
import { IEventResponseDto } from '../dtos/event/event.response.dto';
import { IGetEventService } from '../services/event/get/get.interface';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(
    @Inject('IListEventsService')
    private readonly listEventsService: IListEventsService,
    @Inject('IGetEventService')
    private readonly getEventService: IGetEventService,
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

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar evento por ID',
    description: 'Retorna um evento específico pelo seu ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Evento encontrado com sucesso',
    type: IEventResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Evento não encontrado',
  })
  async findOne(@Param('id') id: string): Promise<IEventResponseDto> {
    return this.getEventService.perform(id);
  }
}
