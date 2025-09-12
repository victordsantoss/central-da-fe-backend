import { Injectable } from '@nestjs/common';
import { Event, Order, Prisma, Ticket } from '@prisma/client';
import { BaseRepository } from '../../../common/core/repositories/base.repository';
import { PrismaService } from '../../../database/core/prisma.service';
import { IListEventsRequestDto } from '../dtos/event/list.request.dto';
import { IEventRepository } from './event.repository.interface';
import {
  EventsWithChurchAndAddress,
  EventSubscriptionResult,
} from '../types/event.types';

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

  async findByIdWithIncludes(
    id: string,
  ): Promise<EventsWithChurchAndAddress | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        church: true,
        address: true,
      },
    });
  }

  async createOrder(userId: string, eventId: string): Promise<Order> {
    return this.prisma.order.create({
      data: {
        userId,
        eventId,
        quantity: 1,
        total: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async createTicket(orderId: string, ticketCode: string): Promise<Ticket> {
    return this.prisma.ticket.create({
      data: {
        orderId,
        code: ticketCode,
        used: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async createSubscription(
    userId: string,
    eventId: string,
    ticketCode: string,
  ): Promise<EventSubscriptionResult> {
    return this.executeTransactionWithOptions(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
          eventId,
          quantity: 1,
          total: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      const ticket = await tx.ticket.create({
        data: {
          orderId: order.id,
          code: ticketCode,
          used: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      await tx.event.update({
        where: { id: eventId },
        data: {
          availableTickets: {
            decrement: 1,
          },
        },
      });

      return {
        orderId: order.id,
        ticketCode: ticket.code,
      };
    });
  }

  async checkUserSubscription(
    userId: string,
    eventId: string,
  ): Promise<boolean> {
    const existingOrder = await this.prisma.order.findFirst({
      where: {
        userId,
        eventId,
      },
    });

    return !!existingOrder;
  }
}
