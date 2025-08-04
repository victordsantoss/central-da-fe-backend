import { Inject, Injectable, Logger } from '@nestjs/common';
import { IListChurchesService } from './list.interface';
import { IListChurchesRequestDto } from 'src/modules/church/dtos/church/list.request.dto';
import { IListChurchesResponseDto } from 'src/modules/church/dtos/church/list.response.dto';
import { IChurchRepository } from 'src/modules/church/repositories/church/church.repository.interface';
import { Church } from '@prisma/client';
import { IChurchResponseDto } from 'src/modules/church/dtos/church/church.response.dto';

@Injectable()
export class ChurchService implements IListChurchesService {
  private readonly logger = new Logger(ChurchService.name);
  constructor(
    @Inject('IChurchRepository')
    private readonly churchRepository: IChurchRepository,
  ) {}

  async perform(
    query: IListChurchesRequestDto,
  ): Promise<IListChurchesResponseDto> {
    const { page, limit, search } = query;
    this.logger.log(`Listando igrejas com paginação: ${page} e ${limit}`);

    const [churches, total] = await this.churchRepository.findByFilters({
      page,
      limit,
      search,
    });

    return {
      data: churches.map(this.mapChurchToResponse),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private mapChurchToResponse(church: Church): IChurchResponseDto {
    return {
      id: church.id,
      name: church.name,
    };
  }
}
