import { Injectable } from '@nestjs/common';
import { Church, Prisma } from '@prisma/client';
import { IChurchRepository } from './church.repository.interface';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IListChurchesRequestDto } from '../../dtos/church/list.request.dto';

@Injectable()
export class ChurchRepository
  extends BaseRepository<Church>
  implements IChurchRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, 'church');
  }

  async findByFilters(
    filters: IListChurchesRequestDto,
  ): Promise<[Church[], number]> {
    const {
      page = 1,
      limit = 10,
      orderBy = 'createdAt',
      sortBy = 'desc',
      search,
    } = filters;

    const where: Prisma.ChurchWhereInput = search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};

    const orderByClause: Prisma.ChurchOrderByWithRelationInput = {
      [orderBy]: sortBy.toLowerCase() === 'asc' ? 'asc' : 'desc',
    };

    const [churches, total] = await this.prisma.$transaction([
      this.prisma.church.findMany({
        where,
        orderBy: orderByClause,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.church.count({ where }),
    ]);

    return [churches, total];
  }
}
