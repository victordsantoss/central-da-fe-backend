import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Event } from '@prisma/client';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IListEventsResponseDto } from '../dtos/event/list.response.dto';
import { IListEventsService } from '../services/event/list/list.interface';
import { IRegisterEventRequestDto } from '../dtos/event/register.request.dto';
import { IRegisterEventService } from '../services/event/register/register.interface';

@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(
    @Inject('IListEventsService')
    private readonly listEventsService: IListEventsService,
    @Inject('IRegisterEventService')
    private readonly registerEventService: IRegisterEventService,
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

  @Post()
  @ApiOperation({
    summary: 'Criar evento',
    description: 'Cria um novo evento',
  })
  @ApiResponse({
    status: 201,
    description: 'Evento criado com sucesso',
    type: Event,
  })
  async create(@Body() event: IRegisterEventRequestDto): Promise<Event> {
    return this.registerEventService.perform(event);
  }
}
