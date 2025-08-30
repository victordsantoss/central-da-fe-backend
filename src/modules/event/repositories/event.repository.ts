import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { BaseRepository } from '../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../database/core/prisma.service';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IEventRepository } from './event.repository.interface';
import { EventsWithChurchAndAddress } from '../types/event.types';

@Injectable()
export class EventRepository
  extends BaseRepository<Event>
  implements IEventRepository
{
  constructor(prisma: PrismaService) {
    super(prisma, 'event');
  }

  async createWithAddress(
    eventData: Omit<Prisma.EventCreateInput, 'address'>,
    addressData: Prisma.AddressCreateInput,
  ): Promise<Event> {
    return this.executeTransactionWithOptions(async (tx) => {
      const createdAddress = await tx.address.create({
        data: addressData,
      });

      const createdEvent = await tx.event.create({
        data: {
          ...eventData,
          address: {
            connect: {
              id: createdAddress.id,
            },
          },
        },
      });

      return createdEvent;
    });
  }

  async findByFilters(
    filters: IListEventsRequestDto,
  ): Promise<[EventsWithChurchAndAddress[], number]> {
    const {
      page = 1,
      limit = 10,
      orderBy = 'createdAt',
      sortBy = 'desc',
      search,
    } = filters;

    const where: Prisma.EventWhereInput = search
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

    const orderByClause: Prisma.EventOrderByWithRelationInput = {
      [orderBy]: sortBy.toLowerCase() === 'asc' ? 'asc' : 'desc',
    };

    const [events, total] = await this.prisma.$transaction([
      this.prisma.event.findMany({
        where,
        orderBy: orderByClause,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          church: true,
          address: true,
        },
      }),
      this.prisma.event.count({ where }),
    ]);

    return [events, total];
  }
}
