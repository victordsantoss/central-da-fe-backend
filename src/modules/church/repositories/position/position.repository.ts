import { Injectable } from '@nestjs/common';
import { Position, Prisma } from '@prisma/client';
import { BaseRepository } from '../../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../../database/core/prisma.service';
import { IListPositionsRequestDto } from '../../dtos/position/list.request.dto';
import { IPositionRepository } from './position.repository.interface';

@Injectable()
export class PositionRepository
  extends BaseRepository<Position>
  implements IPositionRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, 'position');
  }

  async findByFilters(
    filters: IListPositionsRequestDto,
  ): Promise<[Position[], number]> {
    const {
      page = 1,
      limit = 10,
      orderBy = 'createdAt',
      sortBy = 'desc',
      search,
    } = filters;

    const where: Prisma.PositionWhereInput = search
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

    const orderByClause: Prisma.PositionOrderByWithRelationInput = {
      [orderBy]: sortBy.toLowerCase() === 'asc' ? 'asc' : 'desc',
    };

    const [positions, total] = await this.prisma.$transaction([
      this.prisma.position.findMany({
        where,
        orderBy: orderByClause,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.position.count({ where }),
    ]);

    return [positions, total];
  }
}
