import { Inject, Injectable, Logger } from '@nestjs/common';
import { IListPositionsService } from './list.interface';
import { IListPositionsRequestDto } from 'src/modules/church/dtos/position/list.request.dto';
import { IListPositionsResponseDto } from 'src/modules/church/dtos/position/list.response.dto';
import { IPositionRepository } from 'src/modules/church/repositories/position/position.repository.interface';
import { IPositionResponseDto } from 'src/modules/church/dtos/position/position.response.dto';
import { Position } from '@prisma/client';

@Injectable()
export class PositionService implements IListPositionsService {
  private readonly logger = new Logger(PositionService.name);
  constructor(
    @Inject('IPositionRepository')
    private readonly positionRepository: IPositionRepository,
  ) {}

  async perform(
    query: IListPositionsRequestDto,
  ): Promise<IListPositionsResponseDto> {
    const { page, limit, search } = query;
    this.logger.log(`Listando cargos com paginação: ${page} e ${limit}`);

    const [positions, total] = await this.positionRepository.findByFilters({
      page,
      limit,
      search,
    });

    return {
      data: positions.map(this.mapPositionToResponse),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private mapPositionToResponse(position: Position): IPositionResponseDto {
    return {
      id: position.id,
      name: position.name,
    };
  }
}
