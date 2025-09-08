import { IRegisterEventService } from './register.interface';
import { IRegisterEventRequestDto } from '../../../dtos/event/register.request.dto';
import { IEventRepository } from '../../../repositories/event.repository.interface';
import { Event } from '@prisma/client';
import { PrismaService } from '../../../../../database/core/prisma.service';
export declare class RegisterEventService implements IRegisterEventService {
    private readonly eventRepository;
    private readonly prisma;
    private readonly logger;
    constructor(eventRepository: IEventRepository, prisma: PrismaService);
    perform(payload: IRegisterEventRequestDto): Promise<Event>;
}
